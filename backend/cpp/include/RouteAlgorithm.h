#pragma once

#include "Graph.h"

#include <cstddef>
#include <vector>

enum class RouteCost {
    Distance,
    TravelTime,
};

struct RouteResult {
    std::vector<std::size_t> locations;
    double total_cost = 0.0;
};

class RouteAlgorithm {
public:
    virtual ~RouteAlgorithm() = default;
    virtual RouteResult find_route(const Graph& graph, std::size_t start,
                                   std::size_t destination, RouteCost cost) const = 0;
};
