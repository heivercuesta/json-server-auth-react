# Módulo 7: CRUD de Productos Protegido e Integración Backend-Frontend

## 1. Introducción
Este módulo cierra la ruta de aprendizaje integrando el cliente Frontend de React con la API simulada de `json-server-auth` para realizar operaciones CRUD completas en el recurso `/products` exigiendo autenticación mediante cabecera Bearer.

## 2. Conceptos Clave
- **Interceptores HTTP (Axios)**: Inyección automática de `Authorization: Bearer <token>` en cada solicitud.
- **Manejador de Permisos**: Validación de reglas de acceso (ej. reglas 664, 660) simuladas por `json-server-auth`.
- **Relaciones de Propiedad (`userId`)**: Vinculación de nuevos recursos creados al ID del usuario en sesión.

## 3. Ejercicios Incluidos
- `01-axios-config.js`: Cliente de Axios configurado con interceptores.
- `02-product-service.js`: Capa de servicios para peticiones GET, POST, PUT, DELETE.
- `03-hooks-crud.js`: Custom Hook para aislar la lógica de estado de productos.
