import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConstructTextarea } from "./construct-textarea";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct textarea", () => {
  it("exists", () => {
    render(<ConstructTextarea edit={false} id="1" />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
