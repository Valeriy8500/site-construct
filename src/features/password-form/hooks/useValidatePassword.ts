import { errorRegisterCodes } from "@/entities/user/lib/errorCodes";
import { IErrorData, IInputValue } from "../password-form";

export const useValidatePassword = (data: IInputValue) => {
  const error: IErrorData = {
    password: { message: "" },
    confirmPassword: { message: "" },
  };

  if (data.password.length < 6) error.password.message = errorRegisterCodes.WEAK_PASSWORD;
  if (data.confirmPassword.length < 6)
    error.confirmPassword.message = errorRegisterCodes.WEAK_PASSWORD;
  if (data.password === "") error.password.message = "Поле не должно быть пустым";
  if (data.confirmPassword === "") error.confirmPassword.message = "Поле не должно быть пустым";
  if (data.password !== data.confirmPassword) error.confirmPassword.message = "Пароли не совпадают";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};
