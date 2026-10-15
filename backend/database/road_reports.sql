-- Latest report for every road with a report.
SELECT DISTINCT ON (road_id)
    road_id,
    reported_at,
    traffic_level,
    condition,
    report_source
FROM road_reports
ORDER BY road_id, reported_at DESC;
