/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.ts",
      alias: [{ find: "@", replacement: "/src" }],
    },
  })
);
