FROM node:14 as build

# Instalar dependencias

RUN echo "Hola,Mundo"

#RUN pip install flask gunicorn 

#RUN echo 'ls'
# Copiar el código fuente a la imagen del contenedor 

#RUN echo $PATH

# Establecer el directorio de trabajo 
WORKDIR /frontend 

COPY package-lock.json ./ 

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /frontend/build /usr/share/nginx/html 

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD [ "nginx","-g","daemon off;"]
