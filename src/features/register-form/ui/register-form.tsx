import { FC, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [canRegister, setCanRegister] = useState<boolean>(true);
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  useEffect(() => {
    for (const key in error) {
      error[key].message !== "" ? setCanRegister(false) : setCanRegister(true);
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newError = { ...error, [e.target.name]: { message: "" } };

    if (e.target.name === "password") {
      setPassword(e.target.value);

      if (e.target.value !== confirmPassword) {
        newError = {
          ...error,
          password: { message: "Пароли не совпадают" },
          confirmPassword: { message: "Пароли не совпадают" },
        };
      } else {
        newError = { ...error, password: { message: "" }, confirmPassword: { message: "" } };
      }
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);

      if (e.target.value !== password) {
        newError = {
          ...error,
          password: { message: "Пароли не совпадают" },
          confirmPassword: { message: "Пароли не совпадают" },
        };
      } else {
        newError = { ...error, password: { message: "" }, confirmPassword: { message: "" } };
      }
    }

    setError(newError);
  };

  const HandleSubmit = async (e: FormEvent<CustomForm>) => {
    setError({});
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const lastname = formData.get("lastname")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const confirmPassword = formData.get("confirmPassword")?.toString() || "";

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
        setCanRegister(false);
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
            <div>
              <Input
                error={error.name && error.name.message}
                type="text"
                id="form_name"
                name="name"
                defaultValue=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Label forValue="form_lastname" label="Фамилия" />
            <div>
              <Input
                error={error.lastname && error.lastname.message}
                type="text"
                id="form_lastname"
                name="lastname"
                defaultValue=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Label forValue="form_email" label="Email" />
            <div>
              <Input
                error={error.email && error.email.message}
                type="email"
                id="form_email"
                name="email"
                defaultValue=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Label forValue="form_password" label="Пароль" />
            <div>
              <Input
                error={error.password && error.password.message}
                id="form_password"
                type="password"
                name="password"
                defaultValue=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Label forValue="form_confirm_password" label="Подтверждение пароля" />
            <div>
              <Input
                error={error.confirmPassword && error.confirmPassword.message}
                id="form_confirm_password"
                type="password"
                name="confirmPassword"
                defaultValue=""
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            className={canRegister ? styles.btn_normal : styles.btn_error}
            disabled={!canRegister}
            type="submit"
            isLoading={isLoading}
          >
            Регистрация
          </Button>
          <br />

          <div className={styles.login}>
            <Link className={styles.login_link} to="/login">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
