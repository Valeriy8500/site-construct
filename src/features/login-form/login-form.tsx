import { FC, FormEvent, useState, useEffect } from "react";
import styles from "./login-form.module.scss";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { errorLoginCodes } from "@/entities/user/lib/errorCodes";
import { useLoginMutation } from "@/entities/user";
import { useAppSelector } from "@/app/providers/store-provider/store.types";
import { getLoginError } from "@/entities/user/model/user.selectors";
import { useNavigate } from "react-router-dom";

export const LoginForm: FC = () => {
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const navigate = useNavigate();
  const [login, {}] = useLoginMutation();
  const loginError = useAppSelector(getLoginError);

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

    const email = (e.currentTarget[0] as HTMLInputElement).value || "";
    const password = (e.currentTarget[1] as HTMLInputElement).value || "";

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
            <Input
              error={errorEmail}
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
              error={errorPassword}
              id="form_password"
              type="password"
              name="password"
              defaultValue=""
              onChange={() => void 0}
            />
          </div>

          <Button type="submit">Войти</Button>
        </form>
      </div>
    </>
  );
};
