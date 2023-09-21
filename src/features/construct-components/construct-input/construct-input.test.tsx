import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConstructInput } from "./construct-input";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct input", () => {
  it("exists", () => {
    render(<ConstructInput edit={false} id="1" />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
