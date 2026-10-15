from fastapi import APIRouter, HTTPException

from .schemas import RouteRequest, RouteResponse

router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@router.post("/routes", response_model=RouteResponse)
def find_route(request: RouteRequest) -> RouteResponse:
    raise HTTPException(
        status_code=501,
        detail="Route calculation is not implemented yet.",
    )
