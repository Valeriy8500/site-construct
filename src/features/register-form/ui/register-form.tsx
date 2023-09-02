import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { CustomForm, ErrorData } from "@/entities/user/api/user.api.types";
import { useRegisterMutation } from "@/entities/user/api/user.api";
import { useValidateSignUp } from "../hooks/useValidateSignUp";
import styles from "./register-form.module.scss";

import { ErrorType } from "@/entities/user/model/user.types";
import { errorRegisterCodes } from "@/entities/user/lib/errorCodes";

export const RegisterForm: FC = () => {
  const [error, setError] = useState<ErrorData>({});
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const HandleSubmit = async (e: FormEvent<CustomForm>) => {
    setError({});
    e.preventDefault();
    const name = (e.currentTarget[0] as HTMLInputElement).value || "";
    const lastname = (e.currentTarget[1] as HTMLInputElement).value || "";
    const email = (e.currentTarget[2] as HTMLInputElement).value || "";
    const password = (e.currentTarget[3] as HTMLInputElement).value || "";
    const confirmPassword = (e.currentTarget[4] as HTMLInputElement).value || "";
    const data = {
      name,
      lastname,
      email,
      password,
      confirmPassword,
    };
    const validate = useValidateSignUp(data);
    setError(validate);

    //если ошибок ввода нет
    if (Object.keys(validate).length === 0) {
      //отправляем запрос на сервер
      const singUpResult = await register({
        displayName: name + " " + lastname,
        email,
        password,
        returnSecureToken: true,
      });

      //если вышла ошибка
      if ("error" in singUpResult) {
        const err = singUpResult.error as ErrorType;
        const errData = err.data.error.message.split(" ")[0];
        if (errData.match(/EMAIL/g)) {
          setError({ email: { message: errorRegisterCodes[errData] } });
        } else if (errData.match(/PASSWORD/g)) {
          setError({ password: { message: errorRegisterCodes[errData] } });

          return;
        }
      } else {
        setError({});
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Регистрация</h1>
        <form onSubmit={HandleSubmit} className={styles.form}>
          <div className={styles.block}>
            <Label forValue="form_name" label="Имя" />
            <Input
              error={error.name && error.name.message}
              type="text"
              id="form_name"
              name="name"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>
          <div className={styles.block}>
            <Label forValue="form_lastname" label="Фамилия" />
            <Input
              error={error.lastname && error.lastname.message}
              type="text"
              id="form_lastname"
              name="lastname"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>
          <div className={styles.block}>
            <Label forValue="form_email" label="Email" />
            <Input
              error={error.email && error.email.message}
              type="email"
              id="form_email"
              name="email"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>
          <div className={styles.block}>
            <Label forValue="form_password" label="Пароль" />
            <Input
              error={error.password && error.password.message}
              id="form_password"
              type="password"
              name="password"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>
          <div className={styles.block}>
            <Label forValue="form_confirm_password" label="Подтверждение пароля" />
            <Input
              error={error.confirmPassword && error.confirmPassword.message}
              id="form_confirm_password"
              type="password"
              name="confirmPassword"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>

          <Button type="submit">Регистрация</Button>
          <br />
          <p>Есть аккаунт?</p>
          <Button onClick={() => navigate("/login")} type="button">
            Войти
          </Button>
        </form>
      </div>
    </>
  );
};
