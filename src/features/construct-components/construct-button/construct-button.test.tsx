import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ButtonQuill } from "./construct-button";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct-button", () => {
  it("exists", () => {
    render(<ButtonQuill edit={false} id="1" content="Button" />);
    expect(screen.getByTestId("construct-button")).toBeTruthy();
  });
});