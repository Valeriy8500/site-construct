import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructInput } from ".";

describe("construct input", () => {
  it("exists", () => {
    render(<ConstructInput />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
