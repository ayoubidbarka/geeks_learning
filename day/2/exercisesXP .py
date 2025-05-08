#exercices1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
diction=dict(zip(keys,values))
print (diction)
#exercices2
family = {}
while True :
    name = input("enter your name(if you need to stop type \"stop\" ) :")
    if name == "stop":
        break 
    age = int(input("enter age :"))
    family[name]=age 
result = 0
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

#exerces 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
print(brand)
