import random
def guess_number(user_number):
    if not (1 <= user_number <= 100):
        print("Le nombre doit être entre 1 et 100.")
        return 
    if user_number ==  random.randint(1, 100):
        print( "Bravo ! ")
    else:
        print(" domage!")
user_number = int(input("enter number "))
print(guess_number(user_number))
