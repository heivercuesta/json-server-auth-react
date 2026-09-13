<<<<<<< HEAD

# Curso: Introducción a JSON-Server-Auth y React FrontEnd

Bienvenido al repositorio oficial del curso **Introducción a JSON-Server-Auth y React FrontEnd**. Este curso está diseñado para dominar la simulación de APIs RESTful con autenticación basada en JWT, encriptación de credenciales y la integración completa con una aplicación cliente desarrollada en React.

---

## 📑 Agenda General del Curso

| Módulo | Descripción | Enlace |
| :--- | :--- | :--- |
| **Módulo 1** | Fundamentos y Configuración del Entorno | [Ver Módulo 1](./modulo1/README.md) |
| **Módulo 2** | Autenticación, Roles y Manejo de Tokens | [Ver Módulo 2](./modulo2/README.md) |
| **Módulo 3** | Pruebas de Endpoints con Clientes HTTP (Postman/Insomnia/Thunder) | [Ver Módulo 3](./modulo3/README.md) |
| **Módulo 4** | Integración Frontend con React | [Ver Módulo 4](./modulo4/README.md) |

---

## 🚀 Estructura del Repositorio

```text
.
├── README.md
├── modulo1/
│   └── README.md
├── modulo2/
│   └── README.md
├── modulo3/
│   └── README.md
└── modulo4/
    └── README.md
```

---

## 🎯 Objetivos del Curso
1. Comprender los principios de la arquitectura RESTful y seguridad web con JSON Web Tokens (JWT).
2. Simular un backend completo con persistencia en JSON y control de acceso por roles/propietario.
3. Automatizar y validar pruebas de integración con herramientas como Postman, Insomnia y Thunder Client.
4. Desarrollar una SPA en React con gestión global de estado de sesión, rutas protegidas e interceptores de peticiones HTTP.





# Documentación General: Avance Módulos 5, 6 y 7 (React + json-server-auth)

Este archivo comprimido contiene la implementación estructurada y detallada de las tres unidades de aprendizaje solicitadas para la integración de Frontend (React) con la API simulada de backend (`json-server-auth`).

---

## Estrategia Pedagógica y de Desarrollo

El contenido se ha dividido en tres módulos independientes y progresivos:

1. **Módulo 5: Registro de Usuarios, Autenticación y Criptografía**
   - Hashing de contraseñas con `bcryptjs`.
   - Esquemas de usuarios y simulación de bases de datos.
   - Componentes de React independientes para `RegisterForm` y `LoginForm`.

2. **Módulo 6: Simulación de JWT, Contexto Global y Rutas Protegidas**
   - Utilidad de decodificación manual de Tokens JWT.
   - Manejo centralizado de sesión mediante `AuthContext` y `AuthProvider`.
   - Guard de navegación (`ProtectedRoute`) para restringir el acceso a usuarios no autenticados.

3. **Módulo 7: CRUD de Productos Protegido e Integración Backend-Frontend**
   - Configuración de clientes HTTP con interceptores (Axios) para inyectar la cabecera `Authorization: Bearer <token>`.
   - Servicio modular de productos (`getProducts`, `createProduct`, `updateProduct`, `deleteProduct`).
   - Hooks personalizados (`useProducts`) y componentes visuales (`ProductForm`, `ProductList`, `ProductsPage`).

---

## Estructura de Directorios

```text
modulos-react-jsonserver-auth/
├── README.md (Documentación General)
├── modulo-5-registro-autenticacion-criptografia/
│   ├── README.md
│   ├── ejercicios/
│   │   ├── 01-esquema-db-usuarios.json
│   │   ├── 02-script-hash-bcrypt.js
│   │   └── 03-peticiones-registro-login.http
│   └── taller-practico/
│       └── solucion/
│           ├── components/
│           │   ├── RegisterForm.jsx
│           │   └── LoginForm.jsx
│           └── services/
│               └── authService.js
├── modulo-6-simulacion-jwt-contexto-rutas/
│   ├── README.md
│   ├── ejercicios/
│   │   ├── 01-decodificador-jwt.js
│   │   ├── 02-auth-context.jsx
│   │   └── 03-protected-route.jsx
│   └── taller-practico/
│       └── solucion/
│           ├── components/
│           │   └── Navbar.jsx
│           └── pages/
│               ├── Home.jsx
│               └── Dashboard.jsx
└── modulo-7-crud-productos-protegido-integracion/
    ├── README.md
    ├── ejercicios/
    │   ├── 01-axios-config.js
    │   ├── 02-product-service.js
    │   └── 03-hooks-crud.js
    └── taller-practico/
        └── solucion/
            ├── components/
            │   ├── ProductForm.jsx
            │   ├── ProductList.jsx
            │   └── ProductCard.jsx
            └── pages/
                └── ProductsPage.jsx
=======
# Curso: Introducción a JSON-Server-Auth y React FrontEnd

Bienvenido al repositorio oficial del curso **Introducción a JSON-Server-Auth y React FrontEnd**. Este curso está diseñado para dominar la simulación de APIs RESTful con autenticación basada en JWT, encriptación de credenciales y la integración completa con una aplicación cliente desarrollada en React.

---

## 📑 Agenda General del Curso

| Módulo | Descripción | Enlace |
| :--- | :--- | :--- |
| **Módulo 1** | Fundamentos y Configuración del Entorno | [Ver Módulo 1](./modulo1/README.md) |
| **Módulo 2** | Autenticación, Roles y Manejo de Tokens | [Ver Módulo 2](./modulo2/README.md) |
| **Módulo 3** | Pruebas de Endpoints con Clientes HTTP (Postman/Insomnia/Thunder) | [Ver Módulo 3](./modulo3/README.md) |
| **Módulo 4** | Integración Frontend con React | [Ver Módulo 4](./modulo4/README.md) |

---

## 🚀 Estructura del Repositorio

```text
.
├── README.md
├── modulo1/
│   └── README.md
├── modulo2/
│   └── README.md
├── modulo3/
│   └── README.md
└── modulo4/
    └── README.md
>>>>>>> b3536196279008900999d9fa7d581967e9364422
```

---

<<<<<<< HEAD
## Instrucciones de Instalación y Ejecución

### 1. Requisitos Previos
- Node.js (v16+)
- npm / yarn

### 2. Configuración del Servidor Simulado (`json-server-auth`)
Instalar globalmente o de forma local las dependencias necesarias:
```bash
npm install -g json-server json-server-auth bcryptjs
```

Para iniciar el servidor con el archivo de base de datos base:
```bash
json-server-auth modulo-5-registro-autenticacion-criptografia/ejercicios/01-esquema-db-usuarios.json --port 3000
```

### 3. Ejecución del Frontend en React
Copiar los archivos de los talleres prácticos a su proyecto React (Vite / CRA) y verificar que las peticiones se dirijan al puerto local `http://localhost:3000`.
=======
## 🎯 Objetivos del Curso
1. Comprender los principios de la arquitectura RESTful y seguridad web con JSON Web Tokens (JWT).
2. Simular un backend completo con persistencia en JSON y control de acceso por roles/propietario.
3. Automatizar y validar pruebas de integración con herramientas como Postman, Insomnia y Thunder Client.
4. Desarrollar una SPA en React con gestión global de estado de sesión, rutas protegidas e interceptores de peticiones HTTP.
>>>>>>> b3536196279008900999d9fa7d581967e9364422
