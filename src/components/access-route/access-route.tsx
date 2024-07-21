import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../entities/auth';
import { AppRoute } from '../../const';

type AccessRouteProps = {
  children: React.ReactNode;
  status: AuthStatus;
};

function PrivateRoute({children, status} : AccessRouteProps) {
  return status === 'AUTH' ? children : <Navigate to={AppRoute.Login} />;
}

function PublicRoute({children, status} : AccessRouteProps) {
  return status === 'NO_AUTH' ? children : <Navigate to={AppRoute.Main} />;
}

export { PrivateRoute, PublicRoute };
