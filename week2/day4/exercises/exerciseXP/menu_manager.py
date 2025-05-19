import psycopg2
from menu_items import MenuItems

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

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            conn = get_connection()
            cur = conn.cursor()
            cur.execute("SELECT name, price FROM Menu_Items WHERE name = %s;", (name,))
            result = cur.fetchone()
            cur.close()
            conn.close()
            if result:
                return MenuItems(result[0], result[1])
        except Exception as e:
            print(f"Error fetching item: {e}")
        return None

    @classmethod
    def all_items(cls):
        try:
            conn = get_connection()
            cur = conn.cursor()
            cur.execute("SELECT name, price FROM Menu_Items;")
            results = cur.fetchall()
            cur.close()
            conn.close()
            return [MenuItems(name, price) for name, price in results]
        except Exception as e:
            print(f"Error fetching menu items: {e}")
            return []
