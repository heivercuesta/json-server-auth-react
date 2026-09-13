# Módulo 3: Pruebas de Endpoints con Clientes HTTP

## 1. Introducción
El uso de clientes HTTP como Postman, Insomnia o Thunder Client (extensión de VS Code) permite auditar, depurar y automatizar las pruebas de comportamiento de la API REST simulada antes de iniciar la integración con el cliente web.

---

## 2. Configuración e Implementación

### Variables de Entorno
Configurar un entorno (*Environment*) con las siguientes variables:
* `baseUrl`: `http://localhost:4000`
* `token`: *(Cadena vacía inicial)*

### Automatización de Extracción de Token (Script en Login)
En Postman (pestaña *Tests*) o Thunder Client (pestaña *Tests*), agregar el siguiente fragmento para capturar el token de forma automática tras un `/login` exitoso:

```javascript
if (pm.response.code === 200 || pm.response.code === 201) {
    const response = pm.response.json();
    pm.environment.set("token", response.accessToken);
}
```

---

## 3. Guía de Pruebas por Endpoint

### 1. POST `/register` (Registro de Usuario)
* **URL:** `{{baseUrl}}/register`
* **Body (json):**
```json
{
  "email": "user@test.com",
  "password": "Password123"
}
```
* **Respuesta Esperada:** `201 Created` con objeto `accessToken`.

### 2. POST `/login` (Inicio de Sesión)
* **URL:** `{{baseUrl}}/login`
* **Body (json):**
```json
{
  "email": "user@test.com",
  "password": "Password123"
}
```
* **Respuesta Esperada:** `200 OK` + asignación automática de `{{token}}`.

### 3. GET `/products` (Público vs Protegido)
* **URL:** `{{baseUrl}}/products`
* **Headers:** `Authorization: Bearer {{token}}`
* **Respuesta Esperada:** `200 OK` con la lista de productos.

### 4. POST `/products` (Creación de Recursos)
* **URL:** `{{baseUrl}}/products`
* **Headers:** `Authorization: Bearer {{token}}`
* **Body (json):**
```json
{
  "name": "Teclado Mecánico",
  "price": 85,
  "userId": 1
}
```
* **Respuesta Esperada:** `201 Created`.

### 5. PUT / PATCH `/products/:id` (Actualización)
* **PUT (Reemplazo total):** `{{baseUrl}}/products/1`
* **PATCH (Actualización parcial):** `{{baseUrl}}/products/1`
* **Body (json):**
```json
{
  "price": 75
}
```
* **Respuesta Esperada:** `200 OK`.

### 6. DELETE `/products/:id` (Eliminación)
* **URL:** `{{baseUrl}}/products/1`
* **Headers:** `Authorization: Bearer {{token}}`
* **Códigos de Estado a Evaluar:**
  * `200 OK` / `204 No Content`: Borrado exitoso.
  * `401 Unauthorized`: Token no provisto o inválido.
  * `403 Forbidden`: No es propietario del recurso.
  * `404 Not Found`: El recurso no existe.

---

## 🥊 Taller y Reto Práctico: Módulo 3

1. **Creación de Colección:** Diseñar una colección completa en Postman/Thunder Client llamada `Curso-JSON-Server-Auth`.
2. **Flujo de Seguridad:**
   * Ejecutar `POST /products` sin token y verificar que la API retorne `401 Unauthorized`.
   * Ejecutar `/login`, capturar el token e intentar nuevamente la creación.
3. **Auditoría de Códigos HTTP:** Documentar en una tabla las respuestas obtenidas al intentar modificar con `PUT` un recurso inexistente (`404`) versus un recurso perteneciente a otro usuario (`403`).
