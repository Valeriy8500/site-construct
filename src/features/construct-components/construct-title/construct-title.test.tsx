import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TitleQuill } from "./construct-title";

describe("construct title", () => {
  it("exists", () => {
    render(<TitleQuill id="123" edit={false} content="test" />);
    expect(screen.getByTestId("construct-title")).toBeTruthy();
  });
});
