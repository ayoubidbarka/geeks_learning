from menu_items import MenuItems
from menu_manager import MenuManager

def view_item():
    name = input("Dkhl smit l-item li bghiti tchouf: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"{item.name} - {item.price} dh")
    else:
        print("Item malkinach.")

def add_item_to_menu():
    name = input("Dkhl smiya dyal l-item: ").strip()
    try:
        price = float(input("Dkhl taman dyal l-item: "))
    except ValueError:
        print("Taman khaso ykoun ra9m.")
        return

    new_item = MenuItems(name, price)
    new_item.save()

def remove_item_from_menu():
    name = input("Dkhl smit l-item li bghiti tḥyed: ").strip()
    item = MenuItems(name, 0)
    item.delete()

def update_item_from_menu():
    old_name = input("Dkhl smit l-item li bghiti tbdl: ").strip()
    try:
        old_price = float(input("Dkhl taman l-qdim: "))
    except ValueError:
        print("Taman qdim khaso ykoun ra9m.")
        return

    new_name = input("Dkhl smit l-item jdida: ").strip()
    try:
        new_price = float(input("Dkhl taman jdida: "))
    except ValueError:
        print("Taman jdid khaso ykoun ra9m.")
        return

    item = MenuItems(old_name, old_price)
    item.update(new_name, new_price)

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("Menu khawi.")
    else:
        print("\n--- Menu dyal l-makla ---")
        for item in items:
            print(f"{item.name} - {item.price} dh")

def show_user_menu():
    while True:
        print("\n________ Menu de restaurant ________")
        print("____ Welcome ____")
        print("View an item (V)")
        print("Add a new item (A)")
        print("Delete an item (D)")
        print("Update an item (U)")
        print("Show the full menu (S)")
        print("Exit (E)")

        user = input("Enter your choice: ").strip().upper()
        
        if user == 'V':
            view_item()
        elif user == 'A':
            add_item_to_menu()
        elif user == 'D':
            remove_item_from_menu()
        elif user == 'U':
            update_item_from_menu()
        elif user == 'S':
            show_restaurant_menu()
        elif user == 'E':
            print("Bslama!")
            break
        else:
            print("Choice not valid!")

if __name__ == '__main__':
    show_user_menu()
