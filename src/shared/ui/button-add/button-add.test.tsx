import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonAdd } from "./button-add";

describe("button ui", () => {
  it("Render ButtonAdd", () => {
    const fn = vi.fn();

    render(<ButtonAdd onClick={fn} />);
    expect(screen.getByText("+")).toBeTruthy();
  });
});
