import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ParagraphQuill } from ".";

describe("construct paragraph", () => {
  it("exists", () => {
    render(<ParagraphQuill />);
    expect(screen.getByTestId("construct-paragraph")).toBeTruthy();
  });
});
