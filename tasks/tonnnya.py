import math


def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague


print(goals(5, 10, 2))


def make_negative(number):
    if number > 0:
        return -number
    elif number < 0:
        return number
    else:
        return 0


print(make_negative(5))


def move(position, roll):
    return position + roll + roll


print(move(3, 6))


def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"


print(greet("Daniel", "SKJkds"))


def litres(time):
    return int(time * 0.5)


print(litres(11.8))


def lovefunc(flower1, flower2):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False


print(lovefunc(11, 40))


# Task02

def string_to_array(s):
    return s.split(' ')


print(string_to_array(''))


def dna_to_rna(dna):
    return dna.replace('T', 'U')


print(dna_to_rna('TTTT'))


def minimum(arr):
    return f'min = {min(arr)}'


def maximum(arr):
    return f'max = {max(arr)}'


arr = [0, 3, 342, 2434, -12, 43, 0, -2334]
print(minimum(arr), maximum(arr))


def find_smallest(numbers, to_return):
    if to_return == 'value':
        return min(numbers)
    if to_return == 'index':
        return numbers.index(min(numbers))


numbers = [1, 2, 3, -4, 5]

print(find_smallest(numbers, 'index'))
print(find_smallest(numbers, 'value'))


def find_smallest_v2(numbers, to_return):
    min_val = numbers[0]
    min_index = 0
    for i in range(len(numbers)):
        if numbers[i] < min_val:
            min_val = numbers[i]
            min_index = i
    if to_return == 'value':
        return min_index
    elif to_return == 'index':
        return min_index


print(find_smallest_v2(numbers, 'index'))


def arr_sorted(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
        return arr


print(arr_sorted([1, 2, 3, -4, 5]))
print('====')


def twice_as_old(dad_years_old, son_years_old):
    return abs(dad_years_old - 2 * son_years_old)


print(twice_as_old(44, 12))

print('===')


def nth_even(n):
    return 2 * (n - 1)


print(nth_even(3))

print('===')


def get_real_floor(n):
    black_floor = 13
    if 0 < n < black_floor:
        return n - 1
    elif n >= black_floor:
        return n - 2
    else:
        return n


print(get_real_floor(-3))


def past(h, m, s):
    hours_in_milisec = 3600000
    minets_in_milisec = 60000
    sec_in_milisec = 1000
    return h * hours_in_milisec + m * minets_in_milisec + s * sec_in_milisec


print(past(0, 1, 1))


def is_divisible(n, x, y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False


print(is_divisible(3, 1, 3))


class Circle:
    def __init__(self, center, radius):
        self.center = center
        self.radius = radius


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


def circle_circumference(circle):
    return round(2 * math.pi * circle.radius, 6)


c = Circle(10, 10)
print(circle_circumference(c))

print(math.pi)


class Animal:
    def __init__(self, name, age, legs, species, status):
        self.name = name
        self.age = age
        self.legs = legs
        self.species = species
        self.status = status

    def introduce(self):
        return f'Hello, my name is {self.name} and I am a {self.age} years old.'


class Shark(Animal):
    def __init__(self, name, age, status):
        super().__init__(name=name, age=age, legs=0, species='Shark', status=status)

    def introduce(self):
        return f'{super().introduce()}'
class Cat(Animal):
    def __init__(self, name, age, status):
        super().__init__(name = name, age = age, legs = 4, species = 'Cat', status = status)

    def introduce(self):
        return f'{super().introduce()} Meow meow!'

class Dog(Animal):
    def __init__(self, name, age, status):
        super().__init__(name = name, age = age, legs = 4, species = 'Dog', status = status)
        self.master = master

    def introduce(self):
        return f'{super().introduce()}'

    def greet_master(self):
        return f'Hello {self.master}.'


print(Shark('Jaws', 5, 'Healthy').introduce())

def f(*args):
    return sum(args)/len(args)
print(f(1, 2, 3, 4, 5))  # Output: 15

