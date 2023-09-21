import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConstructRadio } from "./construct-radio";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct-radio", () => {
  it("exists", () => {
    render(<ConstructRadio edit={false} id="1" />);
    expect(screen.getByTestId("construct-radio")).toBeTruthy();
  });
});
