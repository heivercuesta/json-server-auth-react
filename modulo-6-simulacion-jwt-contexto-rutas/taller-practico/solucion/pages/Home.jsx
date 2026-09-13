import { useAuth } from '../ejercicios/02-auth-context';

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Panel de Inicio (Home)</h1>
      <p>Bienvenido al área privada de la aplicación.</p>

      {user && (
        <div className="user-profile-card">
          <h3>Información del Usuario Autenticado</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};
