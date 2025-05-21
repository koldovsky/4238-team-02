def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

print(goals(5,10,2))

def make_negative( number ):
    if number > 0:
        return -number
    elif number < 0:
        return number
    else:
        return 0

print(make_negative(5))

def move(position, roll):
    return position + roll + roll

print(move(3,6))

def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"

print(greet("Daniel", "SKJkds"))

def litres(time):
    return int(time * 0.5)

print(litres(11.8))

def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False

print(lovefunc(11,40))