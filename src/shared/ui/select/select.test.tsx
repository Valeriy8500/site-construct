import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MySelect } from "./select";

describe("select", () => {
  it("exists", () => {
    render(<MySelect options={[{ id: "string", value: "string", label: "string" }]} />);
    expect(screen.getByTestId("my-select")).toBeTruthy();
  });
});
