import pymssql

# Configuración de la conexión a la base de datos \SQLEXPRESS

host = '127.0.0.1'
database = ''
username = 'SA'
password = ''
port = 1433
import logging

# Configurar el nivel de registro (opcional)
logging.basicConfig(level=logging.DEBUG)

def list_task():
    try:
                # Establecer conexión
        logging.debug('Este es un mensaje de depuración 2')
        conn = pymssql.connect(host, username, password, database)
        # Crear un cursor para ejecutar consultas
        cursor = conn.cursor()
        logging.debug('Este es un mensaje de depuración 2')
        # Ejecutar una consulta SELECT
        query = 'SELECT * from records;'
        logging.debug('Este es un mensaje de depuración 3')
        cursor.execute(query)
        logging.debug('Este es un mensaje de depuración 4')
        # Obtener los resultados de la consulta
        results = cursor.fetchall()
        logging.debug('Este es un mensaje de depuración 5')
        # Recorrer los resultados y mostrarlos
        print(f"Error al conectar a la base de datos: EEEEEY NICEEEE I AM WORKWING ")
        logging.debug('Este es un mensaje de depuración 6')
        return results


    except pymssql.Error as e:
        logging.debug('Este es un mensaje de depuración 7')
        print(f"Error al conectar a la base de datos: {str(e)}")
