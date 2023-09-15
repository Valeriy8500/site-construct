import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ParagraphQuill } from "./construct-paragraph";

describe("construct paragraph", () => {
  it("exists", () => {
    render(<ParagraphQuill />);
    expect(screen.getByTestId("construct-paragraph")).toBeTruthy();
  });
});
