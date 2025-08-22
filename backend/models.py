from pydantic import BaseModel
from typing import List , Optional

class Coordinates(BaseModel):
    latitude: float
    longitude: float
    country: Optional[str] = None


class Coordinateres(BaseModel):
    data : List[Coordinates]

