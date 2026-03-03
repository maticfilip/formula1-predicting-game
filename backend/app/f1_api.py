import requests
from database import SessionLocal
import models
from datetime import datetime

BASE_URL = "http://api.jolpi.ca/ergast/f1"

def seed():
    db = SessionLocal()

    try:
        print("Seeding teams...")
        constructors_res = requests.get(f"{BASE_URL}/2025/constructors.json").json()
        constructors = constructors_res["MRData"]["ConstructorTable"]["Constructors"]

        team_map = {}  # constructorId -> team db object
        for c in constructors:
            team = models.Team(name=c["name"])
            db.add(team)
            db.flush()  # assigns id without full commit
            team_map[c["constructorId"]] = team
        print(f"  Added {len(team_map)} teams")

        print("Seeding drivers...")
        standings_res = requests.get(f"{BASE_URL}/2025/driverstandings.json").json()
        driver_standings = standings_res["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]

        for entry in driver_standings:
            driver_data = entry["Driver"]
            constructor_id = entry["Constructors"][0]["constructorId"]

            # some drivers switched teams mid season, use first constructor
            team = team_map.get(constructor_id)
            if not team:
                print(f"  Skipping {driver_data['givenName']} - team not found")
                continue

            driver = models.Driver(
                name=f"{driver_data['givenName']} {driver_data['familyName']}",
                number=int(driver_data["permanentNumber"]),
                team_id=team.id
            )
            db.add(driver)
        print(f"  Added {len(driver_standings)} drivers")

        print("Seeding events and sessions...")
        races_res = requests.get(f"{BASE_URL}/2025/races.json").json()
        races = races_res["MRData"]["RaceTable"]["Races"]

        for race in races:
            event = models.Event(
                name=race["raceName"],
                circuit=race["Circuit"]["circuitId"],
                country=race["Circuit"]["Location"]["country"],
                round_number=int(race["round"])
            )
            db.add(event)
            db.flush()

            # parse datetime helper
            def parse_dt(date_str, time_str):
                return datetime.strptime(f"{date_str} {time_str}", "%Y-%m-%d %H:%M:%SZ")

            # qualifying session
            if "Qualifying" in race:
                qualifying = models.Session(
                    event_id=event.id,
                    type=models.SessionType.qualifying,
                    deadline=parse_dt(race["Qualifying"]["date"], race["Qualifying"]["time"])
                )
                db.add(qualifying)

            # sprint session
            if "Sprint" in race:
                sprint = models.Session(
                    event_id=event.id,
                    type=models.SessionType.sprint,
                    deadline=parse_dt(race["Sprint"]["date"], race["Sprint"]["time"])
                )
                db.add(sprint)

            # race session
            race_session = models.Session(
                event_id=event.id,
                type=models.SessionType.race,
                deadline=parse_dt(race["date"], race["time"])
            )
            db.add(race_session)

        print(f"  Added {len(races)} events with sessions")

        db.commit()
        print("Database seeded successfully!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise e

    finally:
        db.close()

if __name__ == "__main__":
    seed()