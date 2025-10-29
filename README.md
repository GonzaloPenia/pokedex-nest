# Pokédex API

![Nest Logo](https://nestjs.com/img/logo-small.svg)

Una API REST para gestionar información de Pokémon construida con NestJS y MongoDB

## 📋 Descripción

Este proyecto es una Pokédex completa que permite consultar y administrar información sobre Pokémon. Ideal para aprender sobre APIs RESTful, bases de datos NoSQL y el framework NestJS.

## 🚀 Ejecutar en Desarrollo

### Requisitos Previos

- Node.js (v16 o superior)
- Docker y Docker Compose
- Yarn o npm

### Pasos de Instalación

1. Clonar el repositorio

       git clone <url-del-repositorio>
       cd pokedex

2. Instalar dependencias

       yarn install

3. Instalar Nest CLI (si no lo tienes)

       npm i -g @nestjs/cli

4. Levantar la base de datos

       docker-compose up -d

5. Clonar el archivo .env.template y renombrar dicha copia a .env

6. Llenar las variables de entorno definidas en el .env

7. Ejecutar la aplicacion en dev

       yarn start:dev

8. Reconstruir la base de datos de la semilla

       http://localhost:3000/api/v2/seed

## 🛠️ Crear build de produccion

- **1.** 1. Crear el archivo .env.prod
- **2.** 2. Crear la nueva imagen: docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build=

## 🛠️ Stack Tecnológico

- **Backend:** NestJS
- **Base de Datos:** MongoDB
- **Containerización:** Docker
- **Package Manager:** Yarn

## 📝 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

    MONGODB_URI=mongodb://localhost:27017/pokedex
    PORT=3000

## 📚 Endpoints Principales

    GET    /pokemon          - Listar todos los Pokémon
    GET    /pokemon/:id      - Obtener un Pokémon por ID
    POST   /pokemon          - Crear un nuevo Pokémon
    PATCH  /pokemon/:id      - Actualizar un Pokémon
    DELETE /pokemon/:id      - Eliminar un Pokémon

## 👨‍💻 Autor

Gonzalo Peña

---

Si este proyecto te fue útil, considera darle una estrella ⭐
