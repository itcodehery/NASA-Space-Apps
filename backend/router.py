from fastapi import APIRouter
import pandas as pd
import json
import time
from pathlib import Path
from geopy.geocoders import Nominatim

# Define file paths
BASE_DIR = Path(__file__).resolve().parent
json_file_path = BASE_DIR / "dataProcessing" / "Data" / "outputsData.json"

router = APIRouter()
geolocator = Nominatim(user_agent="geoapi")

# Load JSON data
if json_file_path.exists():
    with open(json_file_path, 'r') as file:
        data = json.load(file)
else:
    data = []

# ✅ Extract coordinates from all features
coords = []
for feature_collection in data:
    for feature in feature_collection.get("features", []):
        geometry = feature.get("geometry", {})
        if geometry.get("type") == "Polygon":
            polygon_coords = geometry.get("coordinates", [])
            for poly in polygon_coords:
                for point in poly:
                    # point is [longitude, latitude]
                    coords.append({
                        "latitude": point[1],
                        "longitude": point[0]
                    })

# ✅ Create DataFrame
rows = pd.DataFrame(coords)

# ✅ Function to get country name from lat/lon
def get_country(lat, lon):
    try:
        location = geolocator.reverse((lat, lon), language="en")
        if location and "country" in location.raw.get("address", {}):
            return location.raw["address"]["country"]
    except Exception as e:
        print(f"Error: {e}")
    return "Not found"

# ✅ Add country column (with rate limiting)
countries = []
for _, row in rows.iterrows():
    countries.append(get_country(row["latitude"], row["longitude"]))

rows["country"] = countries

# ✅ Group by country and count points
grouped = rows.groupby("country").size().reset_index(name="count")

print('Rows\n\n',rows)      # Full table with lat, lon, country
print('Grouped\n\n',grouped)   # Summary by country
