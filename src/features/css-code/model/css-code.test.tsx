import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CssCode } from "../ui/css-code";

describe("css code", () => {
  it("exists", () => {
    const node = document.createElement('div')
    render(<CssCode node={node}/>)
    expect(screen.getByTestId("css-code")).toBeTruthy()
  })
})