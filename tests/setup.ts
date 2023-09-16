import "@testing-library/jest-dom";
import "@testing-library/jest-dom/matchers";
import { vi, beforeAll } from "vitest";

// expect.extend(matchers)
beforeAll(() => {
  vi.resetModules();
});
