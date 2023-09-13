import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConstructSelect } from ".";

describe("construct-select", () => {
  it("exists", () => {
    render(<ConstructSelect />);
    expect(screen.getByTestId("construct-select")).toBeTruthy();
  });
});
