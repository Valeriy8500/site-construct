import "@testing-library/jest-dom";
import '@testing-library/jest-dom/matchers';
import { vi, beforeAll, expect } from "vitest";

// expect.extend(matchers)
beforeAll(() => {
  vi.resetModules();
});
