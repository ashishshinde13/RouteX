#pragma once

#include "RouteAlgorithm.h"

#include <memory>

class RouteSelector {
public:
    explicit RouteSelector(std::shared_ptr<const RouteAlgorithm> algorithm);
    RouteResult find_route(const Graph& graph, std::size_t start,
                           std::size_t destination, RouteCost cost) const;

private:
    std::shared_ptr<const RouteAlgorithm> algorithm_;
};
