import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Radio } from ".";

describe("radio", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(<Radio radio={{ id: "string", label: "string", isChecked: false }} onChecked={fn} />);
    expect(screen.getByRole("radio")).toBeTruthy();
  });
});
