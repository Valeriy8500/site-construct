import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructCheckbox } from ".";

describe("construct checkbox", () => {
  it("exists", () => {
    render(<ConstructCheckbox />);
    expect(screen.getByTestId("construct-checkbox")).toBeTruthy();
  });
});
