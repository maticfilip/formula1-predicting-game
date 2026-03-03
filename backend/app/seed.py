from database import SessionLocal
import models

db = SessionLocal()

# Create teams
teams = [
    models.Team(name="McLaren"),
    models.Team(name="Ferrari"),
    models.Team(name="Red Bull Racing"),
    models.Team(name="Mercedes"),
]

for team in teams:
    db.add(team)
db.commit()

# Create drivers
drivers = [
    models.Driver(name="Lando Norris", number=4, team_id=1),
    models.Driver(name="Oscar Piastri", number=81, team_id=1),
    models.Driver(name="Charles Leclerc", number=16, team_id=2),
    models.Driver(name="Lewis Hamilton", number=44, team_id=2),
    models.Driver(name="Max Verstappen", number=1, team_id=3),
    models.Driver(name="Sergio Perez", number=11, team_id=3),
    models.Driver(name="George Russell", number=63, team_id=4),
    models.Driver(name="Andrea Kimi Antonelli", number=12, team_id=4),
]

for driver in drivers:
    db.add(driver)
db.commit()

db.close()
print("Seeded successfully")