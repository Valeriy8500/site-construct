import { FC, FormEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { errorLoginCodes } from "@/entities/user/lib/errorCodes";
import { useLoginMutation } from "@/entities/user/api/user.api";
import { getUserAuthError } from "@/entities/user/model/user.selectors";
import styles from "./login-form.module.scss";
import { useAppSelector } from "@/shared/hooks/redux-hooks.ts";

export const LoginForm: FC = () => {
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const loginError = useAppSelector(getUserAuthError);

  const setError = (err: string) => {
    if (err.match(/EMAIL/g)) {
      setErrorEmail(errorLoginCodes[err]);
    } else if (err.match(/PASSWORD/g)) {
      setErrorPassword(errorLoginCodes[err]);
    } else if (err.match(/TRY_LATER/g)) {
      alert(errorLoginCodes[err]);
    }
    if (err === "") {
      setErrorEmail("");
      setErrorPassword("");
    }
  };

  useEffect(() => {
    if (loginError) {
      setError(loginError.split(" ")[0]);
    }
  }, [loginError]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (email === "") {
      setError("EMPTY_EMAIL");
      return;
    } else if (password === "") {
      setError("EMPTY_PASSWORD");
      return;
    }

    const data = await login({ email, password, returnSecureToken: true });
    if (!Reflect.has(data, "error")) {
      setError("");
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.block}>
            <Label forValue="form_email" label="Email" />
            <div>
              <Input
                error={errorEmail}
                type="email"
                id="form_email"
                name="email"
                defaultValue=""
                onChange={() => void 0}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Label forValue="form_password" label="Пароль" />
            <div>
              <Input
                error={errorPassword}
                id="form_password"
                type="password"
                name="password"
                defaultValue=""
                onChange={() => void 0}
              />
            </div>
          </div>

          <Button type="submit">Войти</Button>
          <br />
          <div className={styles.register}>
            <p>Нет аккаунта?</p>
            <Link className={styles.register_link} to="/register">
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
