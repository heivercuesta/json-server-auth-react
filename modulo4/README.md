# Módulo 4: Integración Frontend con React

## 1. Introducción
En este módulo se integra la API simulada con una aplicación Frontend construida en React. Se aborda la gestión global del estado de autenticación, la interceptación de peticiones HTTP, el almacenamiento persistente y la protección de vistas mediante enrutamiento declarativo.

---

## 2. Arquitectura de Autenticación

### Contexto de Autenticación (`AuthContext.jsx`)
```jsx
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = (data) => {
    setToken(data.accessToken);
    setUser(data.user);
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Cliente HTTP con Interceptor (Axios Example) (`api.js`)
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Componente de Ruta Protegida (`ProtectedRoute.jsx`)
```jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
};
```

---

## 3. Vistas Principales del Sistema

### 1. Registro (`Register.jsx`)
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

export const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', form);
      alert('Registro exitoso. Proceda a iniciar sesión.');
      navigate('/login');
    } catch (err) {
      alert('Error en el registro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} required />
      <button type="submit">Registrar</button>
    </form>
  );
};
```

### 2. Login (`Login.jsx`)
```jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import api from './api';

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', credentials);
      login(res.data);
      navigate('/dashboard');
    } catch (err) {
      alert('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setCredentials({...credentials, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={e => setCredentials({...credentials, password: e.target.value})} required />
      <button type="submit">Ingresar</button>
    </form>
  );
};
```

### 3. Dashboard y CRUD Integrado (`Dashboard.jsx`)
```jsx
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import api from './api';

export const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const loadProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  useEffect(() => { loadProducts(); }, []);

  const handleCreate = async () => {
    if (!newProduct) return;
    await api.post('/products', { name: newProduct, price: 100 });
    setNewProduct('');
    loadProducts();
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    loadProducts();
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <button onClick={logout}>Cerrar Sesión</button>

      <h2>Gestión de Productos</h2>
      <input value={newProduct} onChange={e => setNewProduct(e.target.value)} placeholder="Nuevo producto" />
      <button onClick={handleCreate}>Agregar</button>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

---

## 🥊 Taller y Reto Práctico: Módulo 4

1. **Implementación de Edición (PUT/PATCH):** Extender el componente `Dashboard.jsx` agregando la funcionalidad de actualizar el nombre/precio de un producto mediante un formulario o modal.
2. **Manejo de Expiración:** Configurar el interceptor de Axios para que, en caso de recibir una respuesta con error `401 Unauthorized`, cierre la sesión automáticamente (`logout()`) y redirija al usuario a la vista de `/login`.
3. **Publicación:** Estructurar el código en React dentro de una aplicación funcional con `react-router-dom` y conectar todas las rutas definidas.
