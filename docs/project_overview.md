# RouteX project overview

RouteX models a road network as a weighted graph and recommends routes based on user preferences. Road weights can represent distance or estimated travel time, with traffic and road-condition reports intended to influence the routing cost.

## Components

- React frontend for origin/destination search, preferences, route details, and map rendering.
- FastAPI service for the frontend-facing route API.
- C++ graph and routing engine, intended to provide Dijkstra and A* implementations.
- PostgreSQL storage for locations, roads, and road reports.

The initial scaffold includes sample data and component entry points. Live traffic, geocoding, persistence in the API, and route algorithm implementations are future work.
