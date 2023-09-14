import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { LoginForm } from "./login-form";
import { Providers } from "@/app/providers";
import { BrowserRouter } from "react-router-dom";

describe("Проверка формы авторизации", () => {
  test("Нажатие на вход без ввода email", async () => {
    render(
      <Providers>
        <LoginForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();
    const loginButton: HTMLButtonElement = screen.getByText("Войти");
    await user.click(loginButton);

    //@ts-ignore
    expect(screen.getByText("Поле email не должно быть пустым!")).toBeInTheDocument();
  });
  test("Ввод email без пароля", async () => {
    render(
      <Providers>
        <LoginForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();

    const loginInput: HTMLInputElement = screen.getByLabelText("Email");
    const loginButton: HTMLButtonElement = screen.getByText("Войти");

    await user.type(loginInput, "test@test.ru");
    await user.click(loginButton);

    //@ts-ignore
    expect(screen.getByText("Поле пароля не должно быть пустым!")).toBeInTheDocument();
  });
});
