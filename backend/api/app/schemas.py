from typing import Literal

from pydantic import BaseModel, Field


class RouteRequest(BaseModel):
    origin: str = Field(min_length=1)
    destination: str = Field(min_length=1)
    optimize_for: Literal["time", "distance", "traffic"] = "time"
    avoid_tolls: bool = False
    avoid_highways: bool = False


class RouteResponse(BaseModel):
    distance_km: float = Field(ge=0)
    duration_minutes: float = Field(ge=0)
    coordinates: list[tuple[float, float]]
