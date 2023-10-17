from fastapi import FastAPI
from pydantic import BaseModel
# import database 
from typing import List
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import logging
import psycopg2


# Configurar el nivel de registro (opcional)
logging.basicConfig(level=logging.DEBUG)


# Modelo de la entidad "task"
class Task(BaseModel):
    department_id: int
    department_name: str
    count_by_deparment: int

app = FastAPI()

# Lista para almacenar las tasks (simulación de una base de datos)

tasks = [
        {"department_id":8, "department_name":"Support", "count_by_deparment":217}, 
        {"department_id":5, "department_name":"Engineering", "count_by_deparment":207}, 
        {"department_id":6, "department_name":"Human Resources", "count_by_deparment":204}, 
        {"department_id":7, "department_name":"Services", "count_by_deparment":202}, 
        {"department_id":4, "department_name":"Business Development", "count_by_deparment":187}, 
        {"department_id":3, "department_name":"Research and Development", "count_by_deparment":149}
        ]

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8081",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta para obtener todas las tasks
@app.get("/task", response_model=List[Task])
async def get_tasks():
    logging.debug('Este es un mensaje de depuración 1')
    #list = database.list_task()
    host = "task-management-task-management-database-1"
    port = 5432
    database = "globant"
    user = "usuario"  # Reemplaza con tu nombre de usuario de PostgreSQL
    password = "contrasena"  # Reemplaza con tu contraseña de PostgreSQL
    conexion = psycopg2.connect(host=host, port=port, database=database, user=user, password=password)
    cursor = conexion.cursor()
    consulta = "SELECT * FROM public.hired_department_job_avg"
    cursor.execute(consulta)
    resultados = cursor.fetchall()
    diccionarios = []
    for tupla in resultados:
        department_id, department_name, count_by_department = tupla
        diccionario = {
            "department_id": department_id,
            "department_name": department_name,
            "count_by_deparment": count_by_department
        }
        diccionarios.append(diccionario)
    print(diccionarios)
    return diccionarios



# Ruta para obtener todas las tasks
@app.get("/tasks", response_model=List[Task])
async def get_tasks():
    logging.debug('Este es un mensaje de depuración 2')
    return tasks


# Ruta para obtener una task por su ID
@app.get("/tasks/{task_id}", response_model=Task)
async def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    return {"error": "Task no encontrada"}

# Ruta para crear una nueva task
@app.post("/tasks", response_model=Task)
async def create_task(task: Task):
    return task

# Ruta para actualizar una task por su ID
@app.put("/tasks/{task_id}", response_model=Task)
async def update_task(task_id: int, task: Task):
    for i, p in enumerate(tasks):
        if p.id == task_id:
            tasks[i] = task
            return task
    return {"error": "Task no encontrada"}

# Ruta para eliminar una task por su ID
@app.delete("/tasks/{task_id}")
async def delete_task(task_id: int):
    for i, task in enumerate(tasks):
        if task.id == task_id:
            del tasks[i]
            return {"message": "Task eliminada"}
    return {"error": "Task no encontrada"}