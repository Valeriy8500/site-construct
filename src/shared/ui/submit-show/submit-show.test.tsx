import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SubmitShow } from "./";

describe("submit show", () => {
  it("exists", () => {
    render(<SubmitShow form={[]} />);
    expect(screen.getByTestId("submit-show")).toBeTruthy();
  });
});
