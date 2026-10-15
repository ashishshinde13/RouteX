CREATE TABLE IF NOT EXISTS locations (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    latitude DOUBLE PRECISION NOT NULL CHECK (latitude BETWEEN -90 AND 90),
    longitude DOUBLE PRECISION NOT NULL CHECK (longitude BETWEEN -180 AND 180)
);

CREATE TABLE IF NOT EXISTS roads (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    from_location_id BIGINT NOT NULL REFERENCES locations(id),
    to_location_id BIGINT NOT NULL REFERENCES locations(id),
    distance_km DOUBLE PRECISION NOT NULL CHECK (distance_km >= 0),
    travel_time_minutes DOUBLE PRECISION NOT NULL CHECK (travel_time_minutes >= 0),
    road_type TEXT NOT NULL DEFAULT 'local',
    has_toll BOOLEAN NOT NULL DEFAULT FALSE,
    is_highway BOOLEAN NOT NULL DEFAULT FALSE,
    CHECK (from_location_id <> to_location_id)
);

CREATE INDEX IF NOT EXISTS roads_from_location_idx ON roads(from_location_id);
CREATE INDEX IF NOT EXISTS roads_to_location_idx ON roads(to_location_id);

CREATE TABLE IF NOT EXISTS road_reports (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    road_id BIGINT NOT NULL REFERENCES roads(id) ON DELETE CASCADE,
    reported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    traffic_level SMALLINT NOT NULL CHECK (traffic_level BETWEEN 0 AND 5),
    condition TEXT,
    report_source TEXT NOT NULL DEFAULT 'user'
);

CREATE INDEX IF NOT EXISTS road_reports_recent_idx
    ON road_reports(road_id, reported_at DESC);
