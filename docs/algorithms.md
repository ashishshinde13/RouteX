# Routing algorithms

The road network is represented as a weighted directed graph. Bidirectional roads are represented by edges in both directions.

- **Dijkstra:** finds the minimum-cost route for non-negative edge costs. Use distance or estimated travel time as the edge weight.
- **A\*:** uses an admissible heuristic to prioritize promising nodes. Geographic distance can be used for distance optimization; time optimization requires a compatible lower-bound speed assumption.

Traffic and road-condition adjustments should preserve non-negative costs. Avoid-toll and avoid-highway preferences can exclude matching edges. Keep these rules consistent between algorithm implementations and API preferences.
