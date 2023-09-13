import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ReactElement, useState } from "react";
import cls from "./password-form.module.scss";
import { useNavigate } from "react-router";
import { Button } from "@/shared/ui/button";
import { useValidatePassword } from "./hooks/useValidatePassword";

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
  const [inputValue, setInputValue] = useState<IInputValue>({
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const onUpdatePassword = async (): Promise<void> => {
    // const email = inputValue.email;
    // const displayName = `${inputValue.name} ${inputValue.lastname}`;

    // await update({ email, idToken, displayName, returnSecureToken: true });
    // navigate("/");
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };

    const validate = useValidatePassword(inputsData);
    setError(validate);

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
          type="submit"
        >
          Ок
        </Button>
      </form>
    </div>
  );
};