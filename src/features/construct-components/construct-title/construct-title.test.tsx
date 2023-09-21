import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TitleQuill } from "./construct-title";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct title", () => {
  it("exists", () => {
    render(<TitleQuill id="123" edit={false} content="test" />);
    expect(screen.getByTestId("construct-title")).toBeTruthy();
  });
});
