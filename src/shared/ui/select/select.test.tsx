import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MySelect } from "./select";

describe("select", () => {
  it("exists", () => {
    const fn = vi.fn();
    render(
      <MySelect options={[{ id: "string", value: "string", label: "string" }]} onSelect={fn} />
    );
    expect(screen.getByTestId("my-select")).toBeTruthy();
  });
});
