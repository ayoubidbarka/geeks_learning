import datetime

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def draw_cake(age):
    last_digit = age % 10
    candles = "i" * last_digit
    cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
    """
    print(cake)

def birthday_program():
    birth_input = input("Enter your birthdate (DD/MM/YYYY): ")
    try:
        birthdate = datetime.datetime.strptime(birth_input, "%d/%m/%Y")
        today = datetime.datetime.today()
        age = today.year - birthdate.year
        if (today.month, today.day) < (birthdate.month, birthdate.day):
            age -= 1

        print(f"\nYou are {age} years old!")

        # Draw one or two cakes depending on leap year
        if is_leap_year(birthdate.year):
            print("\n You were born in a leap year! Here are two cakes!\n")
            draw_cake(age)
            draw_cake(age)
        else:
            draw_cake(age)
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")

# Call the program
birthday_program()
