# OVERIDE - API Gateway

<p align="center">
  <img src="https://user-images.githubusercontent.com/78517969/144489907-f93ab9ad-8106-4b5c-9f18-919222142726.png" alt="DB_Model" />
  
</p>

API Gateway para la applicacion OVERIDE, contiene toda la logica para el manejo de los microservicios de usuarios, reservas y trayectos mediante graphQL.

## 💻 Requisitos

* NodeJS
* Docker

## 🛠️ Guia de configuracion

El proyecto se encuentra corriendo bajo un host de docker, es posible utilizar el proyecto de manera local utilizando NodeJS o utilizando docker

### Creacion de variable de entorno
En la raiz del proyecto se debe crear un archivo con el nombre **.env**, con la siguiente informacion

```
PORT=3000
SECRET_KEY=<string secreto utilizado en el back>
```

El secret key debe estar sincronizado con el key utilizado en la API Rest al momento de generar los tokens JWT debido a que su proposito es el de verificar estos y su firma.

### Configuracion tradicional
La guia de configuracion esta creada bajo comandos Windows. Todos los comandos se deben ejecutar en la raiz del proyecto a la altura del package.json.

#### 1️⃣ Instalar los paquetes de node
```console
npm install
```

#### 2️⃣ Ejecutar el servidor
```console
npm run dev
```

### Configuracion via Docker
La guia de configuracion esta creada bajo comandos Windows. Todos los comandos se deben ejecutar en la raiz del proyecto a la altura del package.json.

#### 1️⃣ Inicio del servidor Docker
```console
docker-compose up
```

#### ⏹️ Cerrar servidor Docker
```console
docker-compose down -v
```

## ⚙️ API

El acceso a la Api de GraphQL se puede hacer mediante el siguiente endpoint

```
http://localhost:3000/graphql
```

## 📝 Notas

#### 0.1.0

* Inicio del proyecto
* Creada configuración inicial del proyecto
* Creada configuración de Docker
* Creada configuracion de TypeScript

#### 0.2.0

* Actualizada conexion con la API Rest Usuarios
* Creados Queries y Mutations que  permiten interactuar con la API Usuarios

#### 0.3.0

* Actualizada conexion con la API Rest Trayectos
* Creados Queries y Mutations que permiten interactuar con la API Ciudades

#### 0.4.0

* Actualizada conexion con la API Rest Trayectos
* Creados Queries y Mutations que permiten interacturar con la API Trayectos

#### 0.5.0

* Actualizada conexion con la API Rest Reservas
* Creados Queries y Mutations que permiten interactuar con la API Reservas

#### 1.0.0

* Creada version de produccion