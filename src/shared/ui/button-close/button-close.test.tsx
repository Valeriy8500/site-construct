import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonClose } from ".";

describe("button close", () => {
  it("exists", () => {
    const fn = vi.fn();

    render(<ButtonClose onClose={fn} />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
