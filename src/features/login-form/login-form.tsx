import { FC, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { CustomForm, ErrorData, ErrorType } from "@/entities/user";
import { useLoginMutation } from "@/entities/user/api";
import { useValidateSignIn } from "./hooks/useValidateSignIn";
import { errorLoginCodes } from "@/entities/user";
import styles from "./login-form.module.scss";
import { toast } from "react-toastify";

export const LoginForm: FC = () => {
  const [error, setError] = useState<ErrorData>({});

  const [canLogin, setCanLogin] = useState<boolean>(true);

  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    for (const key in error) {
      error[key].message !== "" ? setCanLogin(false) : setCanLogin(true);
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, [e.target.name]: { message: "" } });
  };

  const HandleSubmit = async (e: FormEvent<CustomForm>) => {
    e.preventDefault();
    setError({});

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    const data = {
      email,
      password,
    };

    const validate = useValidateSignIn(data);
    setError(validate);

    //если ошибок ввода нет
    if (Object.keys(validate).length === 0) {
      //отправляем запрос на сервер
      const loginData = await login({ email, password, returnSecureToken: true });

      //если вышла ошибка
      if ("error" in loginData) {
        setCanLogin(false);
        const err = loginData.error as ErrorType;
        const errData = err.data.error.message.split(" ")[0];

        if (errData.match(/EMAIL/g)) {
          setError({ email: { message: errorLoginCodes[errData] } });
        } else if (errData.match(/PASSWORD/g)) {
          setError({ password: { message: errorLoginCodes[errData] } });
        } else if (errData.match(/TRY_LATER/g)) {
          toast.error(errorLoginCodes[errData]);
        } else {
          toast.error(`Ошибка! code: ${err.data.error.code}, message: ${err.data.error.message}`);
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
        <h1>Вход</h1>
        <form onSubmit={HandleSubmit} className={styles.form}>
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

          <Button
            isLoading={isLoading}
            type="submit"
            className={canLogin ? styles.btn_normal : styles.btn_error}
            disabled={!canLogin}
          >
            Войти
          </Button>
          <br />
          <div className={styles.register}>
            <Link className={styles.register_link} to="/register">
              Зарегистрироваться
            </Link>
          </div>
          <div className={styles.register}>
            <Link className={styles.register_link} to="/forgot-password">
              Забыл пароль
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
