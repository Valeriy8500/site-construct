import { IErrorData, IInputValue } from "../user-profile";

export const useValidateProfile = (data: IInputValue) => {
  const error: IErrorData = {
    name: { message: "" },
    lastname: { message: "" },
    email: { message: "" }
  };

  if (data.name === "") error.name.message = "Поле не должно быть пустым";
  if (data.lastname === "") error.lastname.message = "Поле не должно быть пустым";
  if (!data.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email не валиден";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};