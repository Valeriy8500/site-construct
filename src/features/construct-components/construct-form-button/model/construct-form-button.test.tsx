import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ConstructFormButton from "../";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct form button", () => {
  it("exists", () => {
    render(<ConstructFormButton />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
