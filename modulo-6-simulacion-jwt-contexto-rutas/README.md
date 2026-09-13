# Módulo 6: Simulación de JWT, Contexto Global y Rutas Protegidas

## 1. Introducción
En este módulo se profundiza en el manejo del ciclo de vida del JWT, la decodificación en el cliente y la creación de un estado global de autenticación utilizando **React Context API** y **React Router DOM**.

## 2. Conceptos Clave
- **Decodificación de JWT**: Análisis del Payload para extraer expiración (`exp`) e identificador de usuario (`sub`).
- **AuthContext**: Proveedor central del estado de sesión (`user`, `token`, `isAuthenticated`, `login`, `logout`).
- **Guard de Rutas (ProtectedRoute)**: Componente envolvente que valida la existencia del token antes de renderizar vistas privadas, redirigiendo automáticamente a `/login` en caso contrario.

## 3. Contenido de los Ejercicios
- `01-decodificador-jwt.js`: Utility para parsear tokens en Base64.
- `02-auth-context.jsx`: Implementación completa de `AuthProvider` y hook `useAuth`.
- `03-protected-route.jsx`: Componente Guard con `<Navigate />` y `<Outlet />`.
