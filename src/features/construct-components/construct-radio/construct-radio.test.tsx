import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructRadio } from "./construct-radio";

describe("construct-radio", () => {
  it("exists", () => {
    render(<ConstructRadio />);
    expect(screen.getByTestId("construct-radio")).toBeTruthy();
  });
});
