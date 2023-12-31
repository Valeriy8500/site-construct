import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConstructCheckbox } from "./construct-checkbox";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct checkbox", () => {
  it("exists", () => {
    render(<ConstructCheckbox edit={false} id="1" />);
    expect(screen.getByTestId("construct-checkbox")).toBeTruthy();
  });
});
