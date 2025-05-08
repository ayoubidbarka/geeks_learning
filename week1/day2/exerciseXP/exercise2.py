#exercices2
family = {}
while True :
    name = input("enter your name(if you need to stop type \"stop\" ) :")
    if name == "stop":
        break 
    age = int(input("enter age :"))
    family[name]=age 
result = 0
tick = 0
for tick in family :
    if family[tick] < 3 :
        tick = 0
    elif 3 < family[tick] < 12 :
        tick = 10  
    else :
        tick = 15 
    result += tick
print(family)
print("result",result)