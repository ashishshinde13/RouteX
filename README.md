# RouteX

RouteX is a graph-based route optimization system that helps users compare routes using distance, estimated travel time, traffic, road conditions, and personal preferences.

## Technology

- Frontend: React, Vite, Tailwind CSS, Leaflet, and OpenStreetMap
- Routing engine: C++ graph algorithms (Dijkstra and A*)
- API: Python and FastAPI
- Database: PostgreSQL

## Project layout

- `frontend/` — React application and API client
- `backend/cpp/` — graph model and route algorithm interfaces
- `backend/api/` — FastAPI application and request/response schemas
- `backend/database/` — PostgreSQL schema and road-report queries
- `data/` — small sample datasets for local development
- `tests/` — frontend-independent API and C++ test starting points
- `docs/` — API contract, algorithm notes, and project overview

## Getting started

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

### API

```powershell
cd backend/api
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API docs are available at `http://127.0.0.1:8000/docs`.

### C++ routing library

```powershell
cmake -S backend/cpp -B build
cmake --build build
```

See the README files in each component for component-specific notes. The current scaffold establishes interfaces and local development entry points; persistence, live traffic, and the API-to-C++ integration are not implemented yet.

## Configuration

Copy `.env.example` to `.env` and configure the database and service URLs as needed. Do not commit credentials.
