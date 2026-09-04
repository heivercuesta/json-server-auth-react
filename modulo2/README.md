# Módulo 2: Autenticación, Roles y Manejo de Tokens

## 1. Introducción
La autenticación en `json-server-auth` se realiza mediante el intercambio de credenciales por un JWT. Una vez emitido, el cliente adjunta este token en las cabeceras HTTP de subsiguientes peticiones para demostrar su identidad y permisos sobre recursos vinculados.

---

## 2. Explicación Detallada

### Endpoints Nativos de Autenticación
* `POST /register`: Crea un nuevo usuario en la colección `/users` y retorna un JWT. Automáticamente aplica hash a la contraseña.
* `POST /login`: Valida las credenciales ingresadas comparando el hash almacenado. Retorna el token de acceso.

### Estructura y Ciclo de Vida del JWT
Un JWT consta de 3 partes separadas por puntos (`.`): `Header.Payload.Signature`.
* **Header:** Especifica el algoritmo de firma (ej. HS256).
* **Payload:** Contiene las peticiones (*claims*), como el ID del usuario (`sub`), correo y fecha de expiración (`exp`).
* **Signature:** Garantiza la integridad del token verificando que no haya sido alterado en el tránsito.

### Cabecera HTTP Authorization
Para consumir endpoints protegidos, el token debe ser enviado utilizando el esquema *Bearer*:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Control de Acceso Basado en Propietario (`userId`)
Cuando un recurso en `db.json` posee la propiedad `"userId"`, `json-server-auth` con regla `600` valida que el ID extraído del payload del JWT coincida exactamente con el `userId` del registro solicitado.

---

## 3. Ejemplo Práctico: Cifrado y Relación de Datos

### Script de Hashing Manual con Bcrypt (`hash.js`)
```javascript
const bcrypt = require('bcryptjs');

const passwordPlana = 'Secret123!';
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(passwordPlana, salt);

console.log('Password Encriptado:', hash);
```

### Estructura de Recurso Vinculado en `db.json`
```json
{
  "orders": [
    {
      "id": 1,
      "total": 250.00,
      "status": "completed",
      "userId": 1
    }
  ]
}
```

---

## 🥊 Taller y Reto Práctico: Módulo 2

1. **Registro:** Realizar un registro vía script o cliente HTTP para crear un usuario con rol de `editor`.
2. **Generación de Hash:** Crear un script en Node.js que reciba una lista de 3 contraseñas y devuelva sus equivalentes encriptados con `bcryptjs`.
3. **Simulación de Recurso Privado:** Agregar manualmente en `db.json` un elemento a la colección `/orders` asociado a un `userId: 2`. Probar con el token del usuario `id: 1` e identificar por qué el servidor deniega el acceso.
