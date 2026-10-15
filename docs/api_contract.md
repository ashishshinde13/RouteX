# API contract

Base URL for local development: `http://127.0.0.1:8000`

## `GET /health`

Returns `{"status":"ok"}` when the API process is responsive.

## `POST /routes`

Request:

```json
{
  "origin": "Central Station",
  "destination": "City Hall",
  "optimize_for": "time",
  "avoid_tolls": false,
  "avoid_highways": false
}
```

`optimize_for` is one of `time`, `distance`, or `traffic`.

Successful response shape:

```json
{
  "distance_km": 1.2,
  "duration_minutes": 6.0,
  "coordinates": [[40.7128, -74.006], [40.713, -74.0065]]
}
```

Route calculation currently returns HTTP 501 until the C++ engine is connected.
