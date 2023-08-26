import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  // TODO: получить данные из redux, вошел ли пользователь в систему
  const isAuth: boolean = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
