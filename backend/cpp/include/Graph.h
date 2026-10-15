#pragma once

#include <cstddef>
#include <string>
#include <unordered_map>
#include <vector>

struct RoadEdge {
    std::size_t destination;
    double distance_km;
    double travel_time_minutes;
};

struct Location {
    std::string name;
    double latitude;
    double longitude;
};

class Graph {
public:
    std::size_t add_location(Location location);
    void add_road(std::size_t from, std::size_t to, double distance_km,
                  double travel_time_minutes, bool bidirectional = true);

    const Location& location(std::size_t id) const;
    const std::vector<RoadEdge>& neighbors(std::size_t id) const;
    std::size_t size() const noexcept;

private:
    std::vector<Location> locations_;
    std::vector<std::vector<RoadEdge>> adjacency_;
};
