import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;