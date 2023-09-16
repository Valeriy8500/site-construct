import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { getUserIsAuth } from "@/entities/user/model/user.selectors";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
// import { localStorageService } from "@/shared/services/localStorage.service.ts";

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(getUserIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return <>{children}</>;
};
