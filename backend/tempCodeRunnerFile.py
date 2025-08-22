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
    df = pd.DataFrame(data)
else:
    df = pd.DataFrame()

# Extract coordinates and create DataFrame
result = pd.DataFrame(df.features.loc[0][0]['geometry']['coordinates'])
transposed_data = result.transpose()

# Split latitude and longitude
transposed_data[['latitude', 'longitude']] = pd.DataFrame(transposed_data[0].tolist(), index=transposed_data.index)
rows = transposed_data.drop(columns=[0])

# ✅ Add country column using geopy with rate limit
def get_country(lat, lon):
    try:
        location = geolocator.reverse((lat, lon), language="en")
        if location and "country" in location.raw.get("address", {}):
            return location.raw["address"]["country"]
    except Exception as e:
        print(f"Error: {e}")
        return "Not found"
    return "Not found"

countries = []
for _, row in rows.iterrows():
    countries.append(get_country(row["latitude"], row["longitude"]))

rows["country"] = countries

print(rows)  # ✅ Final DataFrame with latitude, longitude, and country
