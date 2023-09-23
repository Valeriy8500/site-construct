import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { QuoteQuill } from "./construct-quote";

const mockDispatch = vi.fn();

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct-quote", () => {
  it("exists", () => {
    render(<QuoteQuill edit={false} id="1" content="Quote" />);
    expect(screen.getByTestId("construct-quote")).toBeTruthy();
  });
});
