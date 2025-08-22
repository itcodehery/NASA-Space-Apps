from fastapi import APIRouter, Query
import pandas as pd
import json
import io
from typing import Dict, List, Optional
from pathlib import Path
from geopy.geocoders import Nominatim


router = APIRouter()
geolocator = Nominatim(user_agent="geoapi")

# df = pd.read_json('your_file.json')
# with open('your_file.json', 'r') as file:
#     data = json.load(file)

df = pd.DataFrame(data)






@router.get("/get_country", response_model=Dict[str, str])
async def get_country(latitude: float = Query(...), longitude: float = Query(...)):
    location = geolocator.reverse((latitude, longitude), language="en")
    if location and "country" in location.raw.get("address", {}):
        country = location.raw["address"]["country"]
    else:
        country = "Not found"

    return {"latitude": str(latitude), "longitude": str(longitude), "country": country}
