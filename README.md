# AgroConecta - Mini Módulo de Autenticación
## Descripción
El mini módulo de autenticación de AgroConecta fue desarrollado con el objetivo de gestionar el registro e inicio de sesión de usuarios dentro de la plataforma. Durante el proyecto se implementó una arquitectura basada en frontend y backend desacoplados, utilizando React + Vite para la interfaz gráfica, Flask para el desarrollo de la API REST y MySQL para la persistencia de datos.  

Además, se utilizaron tecnologías modernas como Docker y Docker Compose para la contenerización y orquestación de servicios, permitiendo una ejecución más organizada y escalable del sistema. También se realizaron pruebas funcionales mediante Postman y se utilizó GitHub para el control de versiones y trabajo colaborativo del proyecto.
## Tecnologías Utilizadas

- React
- Vite
- Flask
- MySQL
- Docker
- Docker Compose
- Postman
- GitHub
- GitHub Desktop
# Levantar contenedores Docker
- ```docker compose up --build```
# Detener contenedores
- ```docker compose down```
# Puertos utilizados
- ```Frontend: 5173:5173```
- ```autenticacion: 5001:5000```
- ```db_autenticacion: 4407:3306```
# Docker compose yml
```yaml
services:

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - autenticacion

  # SERVICIO AUTENTICACION
  autenticacion:
    build: ./Servicio-autenticacion
    ports:
      - "5001:5000"
    depends_on:
      - db_autenticacion
    env_file:
      - .env

  # BASE DE DATOS
  db_autenticacion:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: ${AUTH_MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${AUTH_MYSQL_DATABASE}
    ports:
      - "4407:3306"
    volumes:
      - db_auth_data:/var/lib/mysql

volumes:
  db_auth_data:
```



