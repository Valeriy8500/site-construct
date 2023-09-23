import { describe, expect, test } from "vitest";
import ue from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PasswordForm } from "./password-form";
import { Providers } from "@/app/providers";

describe("Проверка формы смены пароля", () => {
  test("Пароль и подтверждение должны быть одинаковыми", async () => {
    render(
      <Providers>
        <PasswordForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );

    const userEvent = ue.setup();
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Новый пароль");
    const confirmPasswordInput: HTMLInputElement =
      screen.getByPlaceholderText("Подтверждение пароля");
    const okBtn: HTMLElement = screen.getAllByRole("button")[0] as HTMLButtonElement;

    await userEvent.type(passwordInput, "123456");
    await userEvent.type(confirmPasswordInput, "123456");
    await userEvent.click(okBtn);

    expect(passwordInput.value).toEqual(confirmPasswordInput.value);
  });

  test("Проверка пароля на валидность", async () => {
    render(
      <Providers>
        <PasswordForm />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const userEvent = ue.setup();

    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Новый пароль");

    await userEvent.type(passwordInput, "12345");

    expect(screen.getByText("Пароль должен быть не менее 6 символов")).toBeInTheDocument();
  });
});
