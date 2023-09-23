import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Input } from "@/shared/ui/input";
import cls from "./password-form.module.scss";
import { Button } from "@/shared/ui/button";
import { useValidatePassword } from "./hooks/useValidatePassword";
import { useUpdateProfileMutation } from "@/entities/user/api/user.api";
import { CustomForm } from "@/entities/user/api/user.api.types";
import { getUser } from "@/entities/user/model/user.selectors";
import { useAppSelector } from "@/shared/hooks/redux-hooks";
import { ErrorType } from "@/entities/user";

export interface IInputValue {
  password: string;
  confirmPassword: string;
}

export type IErrorData = {
  [P in IInputValue[keyof IInputValue]]: {
    message: string;
  };
};

export const PasswordForm = (): ReactElement => {
  const [error, setError] = useState<IErrorData>({});
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<IInputValue>({
    password: "",
    confirmPassword: "",
  });

  const [update] = useUpdateProfileMutation();
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  const { accessToken: idToken } = user;

  const onUpdatePassword = async (e: FormEvent<CustomForm>): Promise<void> => {
    e.preventDefault();
    const password = inputValue.password;
    const updatePassword = await update({ password, idToken, returnSecureToken: true });

    if ("error" in updatePassword) {
      const err = updatePassword.error as ErrorType;
      toast.error(`Ошибка! code: ${err.data.error.code}, message: ${err.data.error.message}`);
    } else {
      toast.success("Пароль успешно изменён");
      navigate("/");
    }
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };

    const validate = useValidatePassword(inputsData);
    setError(validate);
    setDisabled(Object.keys(validate).length !== 0 ? true : false);

    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={cls.password_change}>
      <form onSubmit={onUpdatePassword} className={cls[`password_change__form`]}>
        <h1 className={cls[`password_change__title`]}>Смена пароля</h1>
        <div className={cls[`password_change__input_container`]}>
          <Input
            error={error.password && error.password.message}
            type="password"
            id="form_password"
            name="password"
            onChange={e => OnChange(e)}
            value={inputValue.password}
            placeholder="Новый пароль"
            style={{ color: "black", width: "100%" }}
          />
        </div>
        <div className={cls[`password_change__input_container`]}>
          <Input
            error={error.confirmPassword && error.confirmPassword.message}
            type="password"
            id="form_confirm_password"
            name="confirmPassword"
            onChange={e => OnChange(e)}
            value={inputValue.confirmPassword}
            placeholder="Подтверждение пароля"
            style={{ color: "black", width: "100%" }}
          />
        </div>
        <Button
          className={cls[`password_change__submit_btn`]}
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
