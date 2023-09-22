import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MockStoreProvider } from "@/shared/lib/mock-store-provider";
import { ConstructBlock } from "./construct-block";

const handleCurrent = (value: string) => {
  console.log(value);
};
describe("construct block", () => {
  it("exists", () => {
    render(
      <MockStoreProvider>
        <ConstructBlock id="123" current={"test"} onCurrent={handleCurrent} />
      </MockStoreProvider>
    );
    expect(screen.getByTestId("123")).toBeTruthy();
  });
});
