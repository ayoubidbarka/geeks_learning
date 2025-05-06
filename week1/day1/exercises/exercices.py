#exercise 1 

print("hello word")
print("hello word")
print("hello word")
print("hello word")

#exercise 2

print("result = ",(99**3)*8)

#exercise 3

name = input("enter your name :")
if name == "ayoub" :
    print("Hhhhhhhhh, good ")
else :
    print("good name ")

#exercise 4

hieght = int(input("enter your height in centimter :"))
if hieght > 145 :
    print("they are tall enogh to ride ")
else :
    print("they need to grow some more to ride") 

#exercise 5

my_fav_numbers = set([1,2,3,4])
my_fav_numbers.add(5)
my_fav_numbers.add(6)
my_fav_numbers.remove(6)
print("my favorit number is :",my_fav_numbers)
friend_fav_numbers = set([10,20,30])
our_fav_numbers = (my_fav_numbers | friend_fav_numbers)
print("mix enter me end my friend is :",our_fav_numbers)

#exercise 6

print("Given a tuple which value is integers, is it possible to add more integers to the tuple ? :  yes, possible to add ")
 
#exercise 7

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.insert(-1,"kiwi")
basket.insert(0,"Apples") 
print(basket.count("Apples"))
basket.clear()
print(basket)
 
#exercise 8
 
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
i = 0
result = []
while i < len(sandwich_orders) :
    order = sandwich_orders[i]
    if order != "Pastrami sandwich" :
        result.append(order)
    i += 1
sandwich_orders = result
#We need to prepare the orders of the clients:

finished_sandwiches=[]
while sandwich_orders:
    order = sandwich_orders[0]
    finished_sandwiches.append(order)
    sandwich_orders.remove(order)


for  order in finished_sandwiches:
    print (f"I made your + {order}")



