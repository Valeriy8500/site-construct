import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HtmlCode } from "../ui/html-code";

describe("html code", () => {
  it("exists", () => {
    const node = document.createElement("div")
    render(<HtmlCode htmlCode={node}/>)
    expect(screen.getByTestId("html-code")).toBeTruthy()
  })
})