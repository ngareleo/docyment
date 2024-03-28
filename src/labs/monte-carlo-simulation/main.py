from random import random
from math import pi


def approximate_pi(center: tuple[int, int], radius: int, iterations: int) -> float:
    # find bounds of circle
    [x_lower, x_upper] = center[0] - radius, center[0] + radius
    [y_lower, y_upper] = center[1] - radius, center[1] + radius
    inside = 0
    for ran in range(iterations):
        random_number_x = random()
        random_number_y = random()
        x = x_lower + (x_upper - x_lower) * random_number_x
        y = y_lower + (y_upper - y_lower) * random_number_y

        # whether it lies inside or outside the circle
        isInsideCircle = ((x - center[0]) ** 2) + ((y - center[1]) ** 2) <= radius ** 2
        if isInsideCircle:
            inside += 1

    area_of_bounding_square = (radius * 2) ** 2
    monte_carlo_area = area_of_bounding_square * inside / iterations
    value_of_pi = monte_carlo_area / radius ** 2
    return value_of_pi


if __name__ == '__main__':

    circle_center = (1, 2)
    r = 5

    sum_of_pi = 0
    number_of_increments = 5
    for i in range(1, number_of_increments + 1):
        number_of_iterations = 1000 * (10 ** i)
        v = approximate_pi(circle_center, r, number_of_iterations)
        sum_of_pi += v
        print(f"Iteration {i}, Iterations {number_of_iterations}. Value of Pi is {v}. Expected value is {pi}")
    print(f"Average value of Pi is {sum_of_pi / number_of_increments}")
