# RouteX C++ routing

This component provides the graph data model and algorithm interfaces for the routing engine.

```powershell
cmake -S . -B build
cmake --build build
.\build\routex_demo.exe
```

`Graph` supports weighted roads. Dijkstra and A* implementation files are starting points and remain TODOs; `RouteSelector` accepts a `RouteAlgorithm` implementation once available.
