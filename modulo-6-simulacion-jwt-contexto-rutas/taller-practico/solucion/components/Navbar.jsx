import { useAuth } from '../ejercicios/02-auth-context';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">Plataforma SENA CEET</div>
      <div className="navbar-menu">
        {isAuthenticated ? (
          <>
            <span>Bienvenido, <strong>{user?.name}</strong></span>
            <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
          </>
        ) : (
          <span>Estado: No autenticado</span>
        )}
      </div>
    </nav>
  );
};
