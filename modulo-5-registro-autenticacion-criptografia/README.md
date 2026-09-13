# Módulo 5: Registro de Usuarios, Autenticación y Criptografía

## 1. Introducción
En este módulo se aborda el proceso completo de registro de usuarios y autenticación segura consumiendo un backend simulado con `json-server-auth`. Se analiza el cifrado de contraseñas mediante `bcryptjs` y cómo estructurar formularios independientes en React.

## 2. Conceptos Clave
- **Encriptación con Bcrypt**: `json-server-auth` intercepta peticiones a `/register` o `/users` y genera automáticamente un hash Bcrypt para el atributo `password`.
- **Registro Independiente**: Flujo en el cual el usuario provee credenciales (`email`, `password`, `name`), el backend procesa la solicitud, encripta la clave y retorna un JSON Web Token (`accessToken`) junto con el perfil del usuario.
- **Login Independiente**: Envío de credenciales al endpoint `/login`. El motor compara la clave plana recibida contra el hash almacenado en `db.json`.

## 3. Ejercicios Incluidos
- `ejercicios/01-esquema-db-usuarios.json`: Modelo de base de datos base.
- `ejercicios/02-script-hash-bcrypt.js`: Generación manual de hashes Bcrypt para datos semilla.
- `ejercicios/03-peticiones-registro-login.http`: Archivo de pruebas HTTP (REST Client / Postman).

## 4. Taller Práctico
Implementación del registro y login con almacenamiento de token en `localStorage`.
