import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ButtonSubmit } from "./";

describe("button submit", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(<ButtonSubmit onSubmit={fn} />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
