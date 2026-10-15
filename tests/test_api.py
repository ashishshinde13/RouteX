from fastapi.testclient import TestClient

from backend.api.app.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_route_endpoint_is_not_implemented_yet() -> None:
    response = client.post(
        "/routes",
        json={
            "origin": "Central Station",
            "destination": "City Hall",
        },
    )

    assert response.status_code == 501
