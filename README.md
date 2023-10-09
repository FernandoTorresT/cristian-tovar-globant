# Instrucciones para Ejecutar el Entorno Jupyter Notebook con Docker

Antes de comenzar, asegúrate de tener Docker y Visual Studio Code instalados en tu sistema.

## Pasos a seguir:

1. **Instala Docker:** Si aún no tienes Docker instalado, puedes descargarlo desde el sitio web oficial: [Descargar Docker](https://www.docker.com/get-started)

2. **Clona este repositorio:** Puedes clonar este repositorio o crear un directorio local para tus archivos de trabajo.

3. **Abre Visual Studio Code:** Abre Visual Studio Code en tu sistema.

4. **Abre el directorio de trabajo en Visual Studio Code:** Desde Visual Studio Code, abre la carpeta que contiene tus archivos de trabajo o el directorio donde clonaste este repositorio.

5. **Abre una terminal en Visual Studio Code:** Desde el menú de Visual Studio Code, ve a "Ver" -> "Terminal" o simplemente presiona `Ctrl + Shift + ` ` para abrir una terminal integrada.

6. **Ejecuta el siguiente comando de Docker:** Copia y pega el siguiente comando en la terminal y presiona Enter:

   ```bash
   docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes -v "$PWD":/home/jovyan/work jupyter/all-spark-notebook




