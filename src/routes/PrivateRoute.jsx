import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children, user }) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
