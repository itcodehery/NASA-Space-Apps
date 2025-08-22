from fastapi import APIRouter
import pandas as pd
import json
import time
from pathlib import Path
from geopy.geocoders import Nominatim

router = APIRouter()
geolocator = Nominatim(user_agent="geoapi")

# File path
BASE_DIR = Path(__file__).resolve().parent
json_file_path = BASE_DIR / "dataProcessing" / "Data" / "outputsData.json"

# Load JSON data
if json_file_path.exists():
    with open(json_file_path, 'r') as file:
        data = json.load(file)
    df = pd.DataFrame(data)
else:
    df = pd.DataFrame()

# ✅ Extract coordinates properly
coordinates = df["features"][0][0]["geometry"]["coordinates"]  # adjust based on actual structure
lat_long_list = [tuple(coord) for coord in coordinates]

# ✅ Function to get country name
def get_country(lat, lon):
    try:
        location = geolocator.reverse((lat, lon), language="en")
        if location and "country" in location.raw.get("address", {}):
            return location.raw["address"]["country"]
    except Exception as e:
        print(f"Error: {e}")
    return "Not found"

# ✅ Process all coordinates
results = []
for lon, lat in lat_long_list:  # GeoJSON uses [longitude, latitude]
    country = get_country(lat, lon)
    results.append({"latitude": lat, "longitude": lon, "country": country})
    time.sleep(1)  # Rate limiting for Nominatim

# ✅ Convert to DataFrame
final_df = pd.DataFrame(results)

# ✅ API Endpoint
@router.get("/get_country")
async def get_country_data():
    return final_df.to_dict(orient="records")

