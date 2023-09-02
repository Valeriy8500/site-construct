import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "@/app/providers/store-provider/store.types";
import { getUserIsAuth } from "@/entities/user/model/user.selectors";

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // получить данные из redux, вошел ли пользователь в систему
  const isAuth = useAppSelector(getUserIsAuth);
  const accessToken = localStorage.getItem("accessToken");

  if (!isAuth && !accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
