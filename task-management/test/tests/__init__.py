from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Modelo de la entidad "persona"
class Persona(BaseModel):
    id: int
    nombre: str
    edad: int
    ciudad: str

# Lista para almacenar las personas (simulación de una base de datos)
personas = []

# Ruta para obtener todas las personas
@app.get("/personas", response_model=List[Persona])
async def get_personas():
    return personas

# Ruta para obtener una persona por su ID
@app.get("/personas/{persona_id}", response_model=Persona)
async def get_persona(persona_id: int):
    for persona in personas:
        if persona.id == persona_id:
            return persona
    return {"error": "Persona no encontrada"}

# Ruta para crear una nueva persona
@app.post("/personas", response_model=Persona)
async def create_persona(persona: Persona):
    personas.append(persona)
    return persona

# Ruta para actualizar una persona por su ID
@app.put("/personas/{persona_id}", response_model=Persona)
async def update_persona(persona_id: int, persona: Persona):
    for i, p in enumerate(personas):
        if p.id == persona_id:
            personas[i] = persona
            return persona
    return {"error": "Persona no encontrada"}

# Ruta para eliminar una persona por su ID
@app.delete("/personas/{persona_id}")
async def delete_persona(persona_id: int):
    for i, persona in enumerate(personas):
        if persona.id == persona_id:
            del personas[i]
            return {"message": "Persona eliminada"}
    return {"error": "Persona no encontrada"}