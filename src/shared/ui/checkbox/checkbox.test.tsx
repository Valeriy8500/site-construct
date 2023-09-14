import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from ".";

describe("checkbox", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(<Checkbox field={{ id: "string", label: "string", isChecked: false }} onChecked={fn} />);
    expect(screen.getByRole("checkbox")).toBeTruthy();
  });
});
