import psycopg2


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '0987'
DATABASE = 'Menu_ITems'
PORT = '5432'

def get_connection():
    return psycopg2.connect(
        dbname=DATABASE,
        user=USERNAME,
        password=PASSWORD,
        host=HOSTNAME,
        port=PORT
    )

class MenuItems:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        query = "INSERT INTO Menu_Items (name, price) VALUES (%s, %s);"
        self._run_query(query, (self.name, self.price))
        print(f"Item '{self.name}' saved.")

    def delete(self):
        query = "DELETE FROM Menu_Items WHERE name = %s;"
        self._run_query(query, (self.name,))
        print(f"Item '{self.name}' deleted.")

    def update(self, new_name, new_price):
        query = "UPDATE Menu_Items SET name = %s, price = %s WHERE name = %s;"
        self._run_query(query, (new_name, new_price, self.name))
        print(f"Item '{self.name}' updated to '{new_name}', {new_price} DHS.")
        self.name = new_name
        self.price = new_price

    def _run_query(self, query, params=()):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute(query, params)
            conn.commit()
            cursor.close()
            conn.close()
        except Exception as e:
            print(f"Database query error: {e}")
