import { describe, expect, test } from "vitest";
import ue from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserProfile } from "./user-profile";
import { Providers } from "@/app/providers";

describe("Проверка формы профиля", () => {
  test("Проверка поля 'Имя' на валидность", async () => {
    render(
      <Providers>
        <UserProfile />
      </Providers>,
      { wrapper: BrowserRouter }
    );

    const userEvent = ue.setup();

    const editBtn = screen.getByTestId("user-profile-main-btn");

    await userEvent.click(editBtn);

    const nameInput: HTMLInputElement = screen.getByLabelText("Имя");

    await userEvent.type(nameInput, " ");

    expect(screen.getByText("Поле не должно быть пустым")).toBeInTheDocument();
  });

  test("Проверка поля 'Email' на валидность", async () => {
    render(
      <Providers>
        <UserProfile />
      </Providers>,
      { wrapper: BrowserRouter }
    );
    const userEvent = ue.setup();

    const editBtn = screen.getByTestId("user-profile-main-btn");

    await userEvent.click(editBtn);

    const emailInput: HTMLInputElement = screen.getByPlaceholderText("Email");

    await userEvent.type(emailInput, "test100@test");

    expect(screen.getByText("Email не валиден")).toBeInTheDocument();
  });
});