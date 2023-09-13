import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ButtonEdit } from ".";

describe("button edit", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(<ButtonEdit onClick={fn} />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
