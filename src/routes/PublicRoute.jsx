import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({ children, user }) => {
  const location = useLocation();

  if (user) {
    return <Navigate to={location.state?.from || "/"} />;
  }

  return children;
};
