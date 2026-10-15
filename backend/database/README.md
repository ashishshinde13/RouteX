# RouteX database

The PostgreSQL schema models locations, weighted roads, and timestamped road-condition/traffic reports.

Apply the schema with `psql "$DATABASE_URL" -f schema.sql`. The sample query in `road_reports.sql` returns the latest report for each road.
