import requests
import psycopg2
import random
CREATE TABLE Countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    capital VARCHAR(255),
    flag VARCHAR(255),
    subregion VARCHAR(255),
    population BIGINT
);
conn = psycopg2.connect(
    dbname="your_db",
    user="your_user",
    password="your_password",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

response = requests.get("https://restcountries.com/v3.1/all")
countries = response.json()
random_countries = random.sample(countries, 10)

for country in random_countries:
    name = country.get('name', {}).get('common', None)
    capital = country.get('capital', [None])[0] if country.get('capital') else None
    flag = country.get('flags', {}).get('png', None)
    subregion = country.get('subregion', None)
    population = country.get('population', None)
    
    cur.execute("""
        INSERT INTO Countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

conn.commit()
cur.close()
conn.close()
