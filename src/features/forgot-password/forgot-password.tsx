import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/shared/ui/input";
import cls from "./forgot-password.module.scss";
import { Button } from "@/shared/ui/button";
import { useValidate } from "./hooks/useValidate";
import { ErrorData, ErrorType, errorLoginCodes } from "@/entities/user";

import { CustomForm } from "@/entities/user/api/user.api.types";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "@/entities/user/api";

export interface IInputValue {
  email: string;
}

export const ForgotPassword = (): ReactElement => {
  const [error, setError] = useState<ErrorData>({});
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<IInputValue>({ email: "" });

  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onUpdatePassword = async (e: FormEvent<CustomForm>): Promise<void> => {
    e.preventDefault();

    const email = inputValue.email;
    const res = await resetPassword({ email, requestType: "PASSWORD_RESET" });

    if ("error" in res) {
      const err = res.error as ErrorType;
      const errData = err.data.error.message.split(" ")[0];
      setError({ email: { message: errorLoginCodes[errData] } });
    } else {
      navigate("/");

      toast.success("Ссылка восстановления пароля отправлена на почту", {
        type: "success",
        position: "top-center",
      });
    }
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };

    const validate = useValidate(inputsData);
    setError(validate);
    setDisabled(Object.keys(validate).length !== 0 ? true : false);

    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={cls.forgot_password}>
      <form onSubmit={onUpdatePassword} className={cls[`forgot_password__form`]}>
        <h1 className={cls[`forgot_password__title`]}>Смена пароля</h1>
        <div className={cls[`forgot_password__input_container`]}>
          <Input
            error={error.email && error.email.message}
            type="email"
            id="form_email"
            name="email"
            onChange={e => OnChange(e)}
            value={inputValue.email}
            placeholder="Email"
            style={{ color: "black", width: "100%" }}
          />
        </div>

        <Button
          className={cls[`forgot_password__submit_btn`]}
          disabled={disabled}
          style={disabled ? { opacity: "0.2", cursor: "auto" } : undefined}
          type="submit"
          isLoading={false}
        >
          Ок
        </Button>
      </form>
    </div>
  );
};
