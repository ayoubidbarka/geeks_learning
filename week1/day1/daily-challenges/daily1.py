#challenge 1

number = int(input("enter number :"))
length = int(input("enter length :"))
liste = []
result = 0 
for i in range(1,length+1):
    number * i
    liste.append(number * i)
print(liste)
#challenge 2

word = input("enter word :")
result = ""
for lettre in word  :
    if lettre not in result :
        result += lettre
print(result)