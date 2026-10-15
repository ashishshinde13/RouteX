#include "RouteSelector.h"

#include <stdexcept>
#include <utility>

RouteSelector::RouteSelector(std::shared_ptr<const RouteAlgorithm> algorithm)
    : algorithm_(std::move(algorithm)) {
    if (!algorithm_) {
        throw std::invalid_argument("RouteSelector requires an algorithm.");
    }
}

RouteResult RouteSelector::find_route(const Graph& graph, std::size_t start,
                                      std::size_t destination, RouteCost cost) const {
    return algorithm_->find_route(graph, start, destination, cost);
}
