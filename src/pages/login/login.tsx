import { Navigate } from "react-router-dom";
import { LoginForm } from "@/features/login-form";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";
import { getUserIsAuth } from "@/entities/user/model/user.selectors.ts";

export const Login = () => {
  const isAuth = useAppSelector(getUserIsAuth);

  return isAuth ? <Navigate to="/" /> : <LoginForm />;
};
