import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ParagraphQuill } from "./construct-paragraph";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct paragraph", () => {
  it("exists", () => {
    render(<ParagraphQuill id="123" edit={false} content="test" />);
    expect(screen.getByTestId("construct-paragraph")).toBeTruthy();
  });
});
