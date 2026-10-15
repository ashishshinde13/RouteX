cmake_minimum_required(VERSION 3.16)
project(RouteXRouting LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_library(routex_graph src/Graph.cpp)
target_include_directories(routex_graph PUBLIC include)

add_executable(routex_demo src/main.cpp)
target_link_libraries(routex_demo PRIVATE routex_graph)
