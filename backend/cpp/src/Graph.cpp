#include "Graph.h"

#include <stdexcept>
#include <utility>

std::size_t Graph::add_location(Location location) {
    const auto id = locations_.size();
    locations_.push_back(std::move(location));
    adjacency_.emplace_back();
    return id;
}

void Graph::add_road(std::size_t from, std::size_t to, double distance_km,
                     double travel_time_minutes, bool bidirectional) {
    if (from >= size() || to >= size()) {
        throw std::out_of_range("Road endpoints must refer to existing locations.");
    }
    if (distance_km < 0.0 || travel_time_minutes < 0.0) {
        throw std::invalid_argument("Road costs cannot be negative.");
    }
    adjacency_[from].push_back({to, distance_km, travel_time_minutes});
    if (bidirectional) {
        adjacency_[to].push_back({from, distance_km, travel_time_minutes});
    }
}

const Location& Graph::location(std::size_t id) const {
    return locations_.at(id);
}

const std::vector<RoadEdge>& Graph::neighbors(std::size_t id) const {
    return adjacency_.at(id);
}

std::size_t Graph::size() const noexcept {
    return locations_.size();
}
