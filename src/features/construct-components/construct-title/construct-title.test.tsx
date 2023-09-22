import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TitleQuill } from "./construct-title";
import { MockStoreProvider } from "@/shared/lib/mock-store-provider.tsx";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => mockDispatch,
  useStore: vi.fn(),
}));

describe("construct title", () => {
  it.skip("exists", () => {
    render(
      <MockStoreProvider>
        <TitleQuill id="123" edit={false} content="test" />
      </MockStoreProvider>
    );
    expect(screen.getByTestId("construct-title")).toBeTruthy();
  });
});
