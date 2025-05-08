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
brand["number_stores"] = 2
print("zara! you have a good  clients are men, women, children, home  ")
brand["country_creation"] = "spain"
brand["international_competitors"].append("Desigual")
del brand["creation_date"]
last_name = brand["international_competitors"][-1]
print(last_name)
US = brand["major_color"]["US"]
print(US)
print(len(brand["name"]))
print(brand.keys())
#another dict
more_on_zara ={
    "creation_date":1975,
    "number_stores":10000
}
#dict sur un dict
brand.update(more_on_zara)
print(brand)
print(brand["number_stores"])