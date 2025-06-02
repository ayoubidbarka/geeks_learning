##exercise1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    def sing(self,sounds):
        return f'{sounds}'
bengal_cat = Bengal("BengalTom", 3)
chartreux_cat = Chartreux("Charty", 5)
siamese_cat = Siamese("Sia", 2)
all_cats = [bengal_cat,chartreux_cat,siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()

##exercise2

class Dog :
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight 
        
    def bark(self):
        return "f{self.name},is barking"
    def run_speed(self):
        return "f({self.weight} ,{self.age})*10 "
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return "It's a tie!"
dog1 = Dog("Max", 4, 20)
dog2 = Dog("Bella", 3, 18)
dog3 = Dog("Charlie", 5, 25)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f"{dog1.name} speed: {dog1.run_speed()}")
print(f"{dog2.name} speed: {dog2.run_speed()}")
print(f"{dog3.name} speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
 
##exercise3

import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
    
    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        names = ", ".join(dog_names)
        print(f"{names} all play together")
    
        def do_a_trick(self):
            if self.trained:
                tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
                print(random.choice(tricks))
            else:
                print(f"{self.name} is not trained yet.")
    from dog_file import Dog  # استورد Dog من ملفك
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        names = ", ".join(dog_names)
        print(f"{names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet.")
 ##Exercise4
class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members else []

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new member')}")

    def is_18(self, name):
        for member in self.members:
            if member.get('name') == name:
                return member.get('age', 0) >= 18
        return False 

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(member)

members_list = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

smith_family = Family("Smith", members_list)

smith_family.family_presentation()

smith_family.born(name="Tommy", age=0, gender="Male", is_child=True)

print("Is Michael over 18?", smith_family.is_18("Michael"))

print("Is Tommy over 18?", smith_family.is_18("Tommy"))

##Exercise5

class TheIncredibles(Family):
    def use_power(self, name):
        member = None
        for m in self.members:
            if m.get('name') == name:
                member = m
                break
        
        if not member:
            print(f"No member named {name} found.")
            return
        if member.get('age', 0) >= 18:
            print(f"{member.get('name')}'s power is: {member.get('power')}")
        else:
            raise Exception(f"{member.get('name')} is not over 18 years old!")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()  
members_list = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", members_list)

incredibles_family.incredible_presentation()

incredibles_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

incredibles_family.incredible_presentation()

incredibles_family.use_power("Michael")

try:
    incredibles_family.use_power("Baby Jack")
except Exception as e :
    print(e)
