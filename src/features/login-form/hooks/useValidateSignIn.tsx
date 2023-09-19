import { ErrorData, SignInProps } from "@/entities/user";

export const useValidateSignIn = (data: SignInProps) => {
  const error: ErrorData = {
    email: { message: "" },
    password: { message: "" },
  };

  const { email, password } = data;

  if (email === "") error.email.message = "Поле email не должно быть пустым!";
  if (password === "") error.password.message = "Поле пароля не должно быть пустым!";

  if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email не валиден!";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};
