import { IErrorData, IInputValue } from "../password-form";

export const useValidatePassword = (data: IInputValue) => {
  const error: IErrorData = {
    password: { message: "" },
    confirmPassword: { message: "" }
  };

  if (data.password === "") error.password.message = "Поле не должно быть пустым";
  if (data.confirmPassword === "") error.confirmPassword.message = "Поле не должно быть пустым";
  if (data.password !== data.confirmPassword) error.confirmPassword.message = "Пароли не совпадают";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};