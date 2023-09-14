import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructTextarea } from ".";

describe("construct textarea", () => {
  it("exists", () => {
    render(<ConstructTextarea />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
