import { Input } from "@/shared/ui/input";
import { FormEvent, ReactElement, useState } from "react";
import cls from "./password-form.module.scss";
import { useNavigate } from "react-router";
import { Button } from "@/shared/ui/button";
import { useValidatePassword } from "./hooks/useValidatePassword";
import { useUpdateProfileMutation } from "@/entities/user";
import { CustomForm } from "@/entities/user/api/user.api.types";

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
    password: '',
    confirmPassword: ''
  });

  const [update] = useUpdateProfileMutation();
  const navigate = useNavigate();
  const idToken = localStorage.getItem("accessToken")!;

  const onUpdatePassword = async (e: FormEvent<CustomForm>): Promise<void> => {
    e.preventDefault();
    const password = inputValue.password;
    await update({ password, idToken, returnSecureToken: true });
    alert('Пароль был успешно изменен');
    navigate("/");
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };

    const validate = useValidatePassword(inputsData);
    setError(validate);
    setDisabled(Object.keys(validate).length !== 0 ? true : false)

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
            style={{ color: 'black', width: '100%' }}
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
            style={{ color: 'black', width: '100%' }}
          />
        </div>
        <Button
          className={cls[`password_change__submit_btn`]}
          disabled={disabled}
          style={disabled ? { opacity: "0.2", cursor: "auto" } : undefined}
          type="submit"
        >
          Ок
        </Button>
      </form>
    </div>
  );
};