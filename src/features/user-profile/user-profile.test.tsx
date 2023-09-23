import { describe, expect, test } from "vitest";
import ue from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserProfile } from "./user-profile";
import { Providers } from "@/app/providers";

describe("Проверка формы смены пароля", () => {
  // test("Пароль и подтверждение должны быть одинаковыми", async () => {
  //   render(
  //     <Providers>
  //       <UserProfile />
  //     </Providers>,
  //     { wrapper: BrowserRouter }
  //   );

  //   const userEvent = ue.setup();
  //   const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Новый пароль");
  //   const confirmPasswordInput: HTMLInputElement = screen.getByPlaceholderText("Подтверждение пароля");
  //   console.log('passwordInput: ', passwordInput);
  //   const okBtn: HTMLElement = screen.getAllByRole("button")[0] as HTMLButtonElement;
  //   // expect(passwordInput).toBeTruthy();

  //   console.log('okBtn: ', okBtn);

  //   await userEvent.type(passwordInput, "123456");
  //   await userEvent.type(confirmPasswordInput, "123456");
  //   await userEvent.click(okBtn);

  //   expect(passwordInput.value).toEqual(confirmPasswordInput.value);
  // });

  // test("Проверка поля Имя на валидность", async () => {
  //   render(
  //     <Providers>
  //       <UserProfile />
  //     </Providers>,
  //     { wrapper: BrowserRouter }
  //   );
  //   const userEvent = ue.setup();

  //   const nameInput: HTMLInputElement = screen.getByTestId("user-profile-input-name");

  //   await userEvent.type(nameInput, "");

  //   expect(screen.getByText("Поле не должно быть пустым")).toBeInTheDocument();
  // });
});