#include "Graph.h"

#include <iostream>

int main() {
    Graph graph;
    const auto start = graph.add_location({"Start", 40.7128, -74.0060});
    const auto destination = graph.add_location({"Destination", 40.7306, -73.9866});
    graph.add_road(start, destination, 2.8, 12.0);

    std::cout << "RouteX graph ready with " << graph.size() << " locations.\n";
    return 0;
}
