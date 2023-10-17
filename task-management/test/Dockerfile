FROM python:3

# Instalar dependencias

WORKDIR /test 

COPY . /test 

COPY requirements.txt requirements.txt

RUN pip install -r /test/requirements.txt

COPY . .

CMD ["pytest"]