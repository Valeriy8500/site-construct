import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "./login-form";
import { Providers } from "@/app/providers";

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

    expect(screen.getByText("Email не валиден!")).toBeInTheDocument();
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

    expect(screen.getByText("Поле пароля не должно быть пустым!")).toBeInTheDocument();
  });
});
