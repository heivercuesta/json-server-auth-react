# Módulo 1: Fundamentos y Configuración del Entorno

## 1. Introducción
### Introducción a `json-server` y `json-server-auth`
`json-server` es una herramienta construida sobre Node.js que permite montar una API REST simulada con persistencia en un archivo JSON en cuestión de minutos. Por su parte, `json-server-auth` es un middleware que extiende las capacidades de `json-server` agregando un sistema de autenticación basado en usuarios, encriptación de contraseñas y control de autorización mediante tokens JWT.

### Conceptos Clave
* **JWT (JSON Web Token):** Estándar compacto e independiente para transmitir información de forma segura entre partes como un objeto JSON firmado digitalmente.
* **Hashing de Contraseñas:** Transformación de una cadena legible (contraseña) en una clave alfanumérica de longitud fija mediante algoritmos como Bcrypt, garantizando que las credenciales nunca se almacenen en texto plano.
* **Arquitectura REST:** Estilo arquitectónico para sistemas hipermedia distribuidos que utiliza métodos HTTP estándar (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) para la manipulación de recursos.

---

## 2. Explicación y Configuración

### Instalación de Dependencias
Para iniciar el entorno, instalamos las librerías necesarias mediante `npm`:

```bash
npm init -y
npm install json-server json-server-auth bcryptjs
```

### Estructura de `db.json`
El archivo `db.json` actúa como la base de datos relacional/documental simulada. La colección `/users` es reservada por `json-server-auth`.

```json
{
  "users": [
    {
      "id": 1,
      "email": "admin@dev.com",
      "password": "$2a$10$e8R4aH.6O3v9I3eA5g2rZuD5bK.1K7M.gX9Z.1A2B3C4D5E6F",
      "role": "admin"
    }
  ],
  "products": [
    {
      "id": 101,
      "name": "Laptop Pro",
      "price": 1200,
      "userId": 1
    }
  ]
}
```

### Reglas de Acceso (Middlewares de Permisos)
`json-server-auth` implementa reglas de autorización estilo UNIX basadas en un código numérico de 3 dígitos:

* **664:** Lectura pública (`6`), Escritura por usuarios autenticados (`6`), Ninguna restricción extra (`4`).
* **660:** Lectura y escritura exclusiva para usuarios autenticados.
* **600:** Acceso y manipulación exclusiva para el propietario del recurso (`userId` coincidente).

#### Archivo `routes.json`
```json
{
  "/api/*": "/$1",
  "/products*": "/664/products*",
  "/orders*": "/600/orders*"
}
```

#### Ejecución del Servidor
```bash
npx json-server-auth db.json -r routes.json -p 4000
```

---

## 🥊 Taller y Reto Práctico: Módulo 1

1. **Creación del Proyecto:** Inicializar un proyecto Node.js y estructurar un archivo `db.json` con las colecciones `users`, `categories` y `projects`.
2. **Definición de Políticas:** Configurar `routes.json` de modo que:
   * `/categories` sea accesible públicamente para lectura (regla 664).
   * `/projects` sea un recurso privado únicamente accesible por su creador/propietario (regla 600).
3. **Validación:** Arrancar el servidor en el puerto `4000` y comprobar desde el navegador que la ruta pública responde correctamente.
