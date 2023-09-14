import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ButtonOk } from "./button-ok";

describe("button ok", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(<ButtonOk onClick={fn} />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
