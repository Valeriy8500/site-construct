import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Providers } from "@/app/providers";
import { RegisterForm } from "..";

describe("Проверка формы регистрации", () => {
  test("Пароль и подтверждение должны быть одинаковыми", async () => {
    render(
      <Providers>
        <RegisterForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();

    const passwordInput: HTMLInputElement = screen.getByLabelText("Пароль");
    const confirmPasswordInput: HTMLInputElement = screen.getByLabelText("Подтверждение пароля");

    const loginButton: HTMLElement = screen.getAllByRole("button")[0] as HTMLButtonElement;

    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");
    await user.click(loginButton);

    expect(passwordInput.value).toEqual(confirmPasswordInput.value);
  });

  test("Проверка email на валидность", async () => {
    render(
      <Providers>
        <RegisterForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();

    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    const loginButton: HTMLElement = screen.getAllByRole("button")[0] as HTMLButtonElement;

    await user.type(emailInput, "test@test");
    await user.click(loginButton);

    //@ts-ignore
    expect(screen.getByText("Email не валиден")).toBeInTheDocument();
  });
});
