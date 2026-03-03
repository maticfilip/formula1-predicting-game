import requests
import json

BASE_URL = "http://api.jolpi.ca/ergast/f1"

def test_drivers():
    response = requests.get(f"{BASE_URL}/2025/drivers.json")
    print("=== DRIVERS ===")
    print(json.dumps(response.json(), indent=2))

def test_constructors():
    response = requests.get(f"{BASE_URL}/2025/constructors.json")
    print("=== CONSTRUCTORS ===")
    print(json.dumps(response.json(), indent=2))

def test_races():
    response = requests.get(f"{BASE_URL}/2025/races.json")
    print("=== RACES ===")
    print(json.dumps(response.json(), indent=2))

def test_driver_standings():
    response = requests.get(f"{BASE_URL}/2025/driverstandings.json")
    print("=== DRIVER STANDINGS ===")
    print(json.dumps(response.json(), indent=2))

def test_constructor_standings():
    response = requests.get(f"{BASE_URL}/2025/constructorstandings.json")
    print("=== CONSTRUCTOR STANDINGS ===")
    print(json.dumps(response.json(), indent=2))

test_drivers()
test_constructors()
test_races()
test_driver_standings()
test_constructor_standings()