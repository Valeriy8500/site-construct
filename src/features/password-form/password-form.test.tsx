import { describe, expect, test, vitest } from "vitest";
import userEvent from "@testing-library/user-event";

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


    const user = userEvent.setup({
      advanceTimers: vitest.advanceTimersByTime,
    });
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Новый пароль");
    const confirmPasswordInput: HTMLInputElement = screen.getByPlaceholderText("Подтверждение пароля");
    console.log('passwordInput: ', passwordInput);
    const okBtn: HTMLElement = screen.getAllByRole("button")[0] as HTMLButtonElement;
    // expect(passwordInput).toBeTruthy();

    console.log('okBtn: ', okBtn);

    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");
    await user.click(okBtn);

    expect(passwordInput.value).toEqual(confirmPasswordInput.value);
  });
});