#exercises1
class cat :
    def __init__(self, cat_name,cat_age):
        self.name = cat_name
        self.age = cat_age
cat1 = cat("milo",5)
cat2 = cat("Rex",4)
cat3 = cat("luna",1)
def oldest_cat(*cats):
    return max(cats, key=lambda cat: cat.age)
oldest = oldest_cat(cat1,cat2,cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
#exercise2
class Dog:
    def __init__(self ,Dog_name , Dog_height):
        self.name = Dog_name
        self.height = Dog_height

    def bark(self):
        print(f"{self.name} goes woof!")
        return
    
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")
        return

davids = Dog("Rex", 50)
print(f"his dog's name {davids.name} and his height is {davids.height}cm  ")
#
davids.bark()
davids.jump()
#
sarahs_dog = Dog("Teacup",20)
print(f"her dog's name is {sarahs_dog.name} and his height is {sarahs_dog.height}cm")
#
sarahs_dog.bark()
sarahs_dog.jump() 
#
def bigger_dogs(*dogs):
    return max(dogs, key=lambda Dog: Dog.height)
#
bigger = bigger_dogs(sarahs_dog,davids)
print(f"The bigger dog's  is {bigger.name}, and is {bigger.height} cm.")

#exercise 3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])
stairway.sing_me_a_song()

 #exercise 4


class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(f"- {animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        self.groups = {}
        for animal in self.animals:
            key = animal[0].upper()
            if key in self.groups:
                if isinstance(self.groups[key], str):
                    self.groups[key] = [self.groups[key]]
                self.groups[key].append(animal)
            else:
                self.groups[key] = animal
        return self.groups

    def get_groups(self):
        if not hasattr(self, 'groups'):
            print("No groups yet. Please call sort_animals first.")
            return
        print("Animal groups by first letter:")
        for letter, group in self.groups.items():
            print(f"{letter} : {group}")

new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
