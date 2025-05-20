#exercise1
print("Hello world\nHello world\nHello world\nHello world")
#exercise2
result = (99 ** 3) * 8
print(result)  
#exercise3
my_name = "ayoub"
user_name = input("What's your name? ")

if user_name.strip().lower() == my_name.lower():
    print("No way! We have the same name. Are you a Jedi too?")
else:
    print(f"Nice to meet you, {user_name}! But I'm still the chosen one .")
#exercise4
height = int(input("Enter your height in cm: "))
if height > 145:
    print("You're tall enough to ride the roller coaster! ")
else:
    print("Sorry, you need to grow some more to ride. ")
#exercise5
my_fav_numbers = {7, 42, 3}
my_fav_numbers.add(11)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)

friend_fav_numbers = {13, 3, 21}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
#exercise6
my_tuple = (1, 2, 3)
#exercise7

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print(f"Number of apples: {apple_count}")
basket.clear()
print(basket)  
#exercise8

sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
    "Pastrami sandwich"
]

print("The deli has run out of pastrami.")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    print(f"I made your {sandwich.lower()}")
    finished_sandwiches.append(sandwich)










