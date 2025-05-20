import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(5, 22), 1)
    elif season == 'summer':
        return round(random.uniform(20, 40), 1)
    elif season == 'autumn' or season == 'fall':
        return round(random.uniform(10, 24), 1)
    else:
        raise ValueError("Invalid season provided.")

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'
    else:
        raise ValueError("Month must be an integer between 1 and 12.")

def main():
    try:
        month = int(input("Enter the number of the month (1-12): "))
        season = get_season_from_month(month)
        temp = get_random_temp(season)
        print(f"The temperature right now is {temp} degrees Celsius.")

        if temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temp < 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 16 <= temp < 23:
            print("Nice and mild. A light jacket should do.")
        elif 23 <= temp < 32:
            print("Warm weather! Perfect for outdoor activities.")
        elif 32 <= temp <= 40:
            print("It's hot! Stay hydrated and avoid too much sun.")
        else:
            print("Unusual temperature detected!")

    except ValueError as e:
        print(f"Error: {e}")

main()
