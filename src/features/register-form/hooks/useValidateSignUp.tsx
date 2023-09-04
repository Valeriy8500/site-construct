import { ErrorData, SignUpProps } from "@/entities/user/api/user.api.types";

export const useValidateSignUp = (data: SignUpProps) => {
  const error: ErrorData = {
    name: { message: "" },
    lastname: { message: "" },
    email: { message: "" },
    password: { message: "" },
    confirmPassword: { message: "" },
  };

  const { name, lastname, email, password, confirmPassword } = data;

  if (name === "") error.name.message = "Поле не должно быть пустым";
  if (lastname === "") error.lastname.message = "Поле не должно быть пустым";
  if (email === "") error.email.message = "Поле не должно быть пустым";
  if (password === "") error.password.message = "Поле не должно быть пустым";
  if (confirmPassword === "") error.confirmPassword.message = "Поле не должно быть пустым";

  if (password !== confirmPassword) error.confirmPassword.message = "Пароли не совпадают";
  if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email не валиден";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};
