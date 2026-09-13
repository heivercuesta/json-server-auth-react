# **Curso: Introducción a JSON-Server-Auth y React FrontEnd**

Bienvenido al repositorio oficial del curso **Introducción a JSON-Server-Auth y React FrontEnd**. Este curso está diseñado para dominar la simulación de APIs RESTful con autenticación basada en JWT, encriptación de credenciales con Bcrypt y la integración completa con una aplicación cliente desarrollada en React.

## ---

**🎯 Objetivos del Curso**

> 1. Comprender los principios de la arquitectura RESTful y la seguridad web basada en **JSON Web Tokens (JWT)**.  
> 2. Simular un backend completo con persistencia de datos en JSON, encriptación de contraseñas (bcryptjs) y control de acceso por permisos/roles.  
> 3. Automatizar y validar pruebas de integración con herramientas como **Postman**, **Insomnia** y **Thunder Client**.  
> 4. Desarrollar una Single Page Application (SPA) en React con **AuthContext**, manejo de rutas protegidas (ProtectedRoute) e interceptores HTTP con Axios.  
> 5. Construir un **CRUD completo y protegido de productos** integrando el flujo de registro, login y gestión de tokens.

## ---

**📑 Agenda General del Curso**

| Módulo | Descripción | Enlace   |
| :---- | :---- | :---- |
| **Módulo 1** | Fundamentos y Configuración del Entorno | [Ver Módulo 1](./modulo1/README.md) |
| **Módulo 2** | Autenticación, Roles y Manejo de Tokens | [Ver Módulo 2](./modulo2/README.md) |
| **Módulo 3** | Pruebas de Endpoints con Clientes HTTP (Postman/Insomnia/Thunder) | [Ver Módulo 3](./modulo3/README.md) |
| **Módulo 4** | Integración Frontend con React | [Ver Módulo 4](./modulo4/README.md) |
| **Módulo 5** | Registro de Usuarios, Autenticación y Criptografía | [Ver Módulo 5](./modulo-5-registro-autenticacion-criptografia/README.md) |
| **Módulo 6** | Simulación de JWT, Contexto Global y Rutas Protegidas | [Ver Módulo 6](./modulo-6-simulacion-jwt-contexto-rutas/README.md) |
| **Módulo 7** | CRUD de Productos Protegido e Integración Backend-Frontend | [Ver Módulo 7](./modulo-7-crud-productos-protegido-integracion/README.md) |

## ---

**🚀 Estructura del Repositorio**

`.`  
`├── README.md`  
`├── modulo1/`  
`│   └── README.md`  
`├── modulo2/`  
`│   └── README.md`  
`├── modulo3/`  
`│   └── README.md`  
`├── modulo4/`  
`│   └── README.md`  
`├── modulo-5-registro-autenticacion-criptografia/`  
`│   ├── README.md`  
`│   ├── ejercicios/`  
`│   │   ├── 01-esquema-db-usuarios.json`  
`│   │   ├── 02-script-hash-bcrypt.js`  
`│   │   └── 03-peticiones-registro-login.http`  
`│   └── taller-practico/`  
`│       └── solucion/`  
`│           ├── components/`  
`│           │   ├── RegisterForm.jsx`  
`│           │   └── LoginForm.jsx`  
`│           └── services/`  
`│               └── authService.js`  
`├── modulo-6-simulacion-jwt-contexto-rutas/`  
`│   ├── README.md`  
`│   ├── ejercicios/`  
`│   │   ├── 01-decodificador-jwt.js`  
`│   │   ├── 02-auth-context.jsx`  
`│   │   └── 03-protected-route.jsx`  
`│   └── taller-practico/`  
`│       └── solucion/`  
`│           ├── components/`  
`│           │   └── Navbar.jsx`  
`│           └── pages/`  
`│               ├── Home.jsx`  
`│               └── Dashboard.jsx`  
`└── modulo-7-crud-productos-protegido-integracion/`  
    `├── README.md`  
    `├── ejercicios/`  
    `│   ├── 01-axios-config.js`  
    `│   ├── 02-product-service.js`  
    `│   └── 03-hooks-crud.js`  
    `└── taller-practico/`  
        `└── solucion/`  
            `├── components/`  
            `│   ├── ProductForm.jsx`  
            `│   ├── ProductList.jsx`  
            `│   └── ProductCard.jsx`  
            `└── pages/`  
                `└── ProductsPage.jsx`

## ---

**🛠️ Instrucciones de Instalación y Ejecución**

### **1\. Requisitos Previos**

> * Node.js (v16 o superior)  
> * npm o yarn

### **2\. Configuración e Inicio del Servidor Simulado (json-server-auth)**

Instala globalmente o de forma local las dependencias requeridas:  
`npm install -g json-server json-server-auth bcryptjs`

Para iniciar el backend simulado escuchando en el puerto 3000 con el archivo base de usuarios:  
`json-server-auth modulo-5-registro-autenticacion-criptografia/ejercicios/01-esquema-db-usuarios.json --port 3000`

### **3\. Ejecución del Frontend (React)**

> 1. Navega a tu aplicación en React (creada con Vite o Create React App).  
> 2. Asegúrate de instalar Axios y React Router DOM para el manejo de peticiones e interceptores:  
>    `npm install axios react-router-dom`  
> 3. Copia los componentes, hooks y contextos de los módulos 5, 6 y 7 dentro de tu carpeta src/ para habilitar el flujo completo de Login, Registro, Protección de Rutas y CRUD de Productos.