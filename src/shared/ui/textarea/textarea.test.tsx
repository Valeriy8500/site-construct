import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from ".";

describe("textarea", () => {
  it("exists", () => {
    render(<Textarea id="1" name={"1"} onChange={() => undefined} placeholder="1" rows={1} />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
