import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // TODO: получить данные из redux, вошел ли пользователь в систему
  const isAuth: boolean = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
