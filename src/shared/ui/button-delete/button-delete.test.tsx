import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonDelete } from ".";

describe("button ui", () => {
  it("Render ButtonDelete", () => {
    const fn = vi.fn();

    render(<ButtonDelete onClick={fn} />);
    expect(screen.getByText("x")).toBeTruthy();
  });
});
