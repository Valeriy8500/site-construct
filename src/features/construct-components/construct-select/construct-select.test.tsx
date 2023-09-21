import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConstructSelect } from "./construct-select";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct-select", () => {
  it("exists", () => {
    render(<ConstructSelect edit={false} id="1" />);
    expect(screen.getByTestId("construct-select")).toBeTruthy();
  });
});
