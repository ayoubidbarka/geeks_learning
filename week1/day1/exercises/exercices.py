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














number = int(input("enter number: " ))
length = int(input("enter length: "))
liste = []
result = 0
for i in range(1,length+1) :
    result += number * i 
    result.append(liste)
    print(liste)