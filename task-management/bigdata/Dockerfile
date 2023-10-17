# Utiliza la imagen base de Jupyter All-Spark-Notebook
FROM jupyter/all-spark-notebook

# Habilita JupyterLab
ENV JUPYTER_ENABLE_LAB=yes
COPY postgresql-42.6.0.jar /usr/local/postgresql-42.6.0.jar

# Establece el directorio de trabajo
WORKDIR /home/jovyan/work
