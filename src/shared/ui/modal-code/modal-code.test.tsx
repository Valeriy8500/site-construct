import { render, screen } from "@testing-library/react";
import {describe, it, vi ,expect} from "vitest";
import { ModalCode } from "./modal-code";

describe("modal code", () => {
  it("exists", () => {
    const fn = vi.fn()
    render(<ModalCode onClose={fn}/>)
    expect(screen.getByTestId("modal-code")).toBeTruthy()
  })
})