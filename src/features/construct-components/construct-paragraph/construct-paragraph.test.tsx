import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ParagraphQuill } from "./construct-paragraph";
import { MockStoreProvider } from "@/shared/lib/mock-store-provider";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct paragraph", () => {
  it.skip("exists", () => {
    render(
      <MockStoreProvider>
        <ParagraphQuill id="123" edit={false} content="test" />
      </MockStoreProvider>
    );
    expect(screen.getByTestId("construct-paragraph")).toBeTruthy();
  });
});
