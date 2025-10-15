<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">Pokédex API</h1>

<p align="center">
  Una API REST para gestionar información de Pokémon construida con NestJS y MongoDB
</p>

## 📋 Descripción

Este proyecto es una Pokédex completa que permite consultar y administrar información sobre Pokémon. Ideal para aprender sobre APIs RESTful, bases de datos NoSQL y el framework NestJS.

## 🚀 Ejecutar en Desarrollo

### Requisitos Previos

- Node.js (v16 o superior)
- Docker y Docker Compose
- Yarn o npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
   git clone <url-del-repositorio>
   cd pokedex
```

2. **Instalar dependencias**
```bash
   yarn install
```

3. **Instalar Nest CLI** (si no lo tienes)
```bash
   npm i -g @nestjs/cli
```

4. **Levantar la base de datos**
```bash
   docker-compose up -d
```

5. **Ejecutar la aplicación**
```bash
   yarn start:dev
```

6. **Acceder a la aplicación**
   
   La API estará disponible en: `http://localhost:3000`

## 🛠️ Stack Tecnológico

- **Backend:** NestJS
- **Base de Datos:** MongoDB
- **Containerización:** Docker
- **Package Manager:** Yarn

## 📝 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
MONGODB_URI=mongodb://localhost:27017/pokedex
PORT=3000
```

## 🐳 Comandos Docker
```bash
# Levantar contenedores
docker-compose up -d

# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs -f
```

## 📚 Endpoints Principales
```
GET    /pokemon          - Listar todos los Pokémon
GET    /pokemon/:id      - Obtener un Pokémon por ID
POST   /pokemon          - Crear un nuevo Pokémon
PATCH  /pokemon/:id      - Actualizar un Pokémon
DELETE /pokemon/:id      - Eliminar un Pokémon
```

## 👨‍💻 Autor

Gonzalo Peña

---

⭐ Si este proyecto te fue útil, considera darle una estrella
