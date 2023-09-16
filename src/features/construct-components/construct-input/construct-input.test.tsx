import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructInput } from "./construct-input";

describe("construct input", () => {
  it("exists", () => {
    render(<ConstructInput edit={false} />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
