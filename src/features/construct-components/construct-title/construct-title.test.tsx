import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TitleQuill } from "./construct-title";

describe("construct title", () => {
  it("exists", () => {
    render(<TitleQuill />);
    expect(screen.getByTestId("construct-title")).toBeTruthy();
  });
});
