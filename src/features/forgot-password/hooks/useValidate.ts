import { IInputValue } from "../forgot-password";

type IErrorData = {
  [P in IInputValue[keyof IInputValue]]: {
    message: string;
  };
};
export const useValidate = (data: IInputValue) => {
  const error: IErrorData = {
    email: { message: "" },
  };

  if (!data.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) error.email.message = "Email не валиден";

  for (const key of Object.keys(error)) {
    if (error[key].message !== "") return error;
  }

  return {};
};
