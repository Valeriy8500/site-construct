import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer() as PluginOption, svgr()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  css: {
    modules: {
      generateScopedName: "[local]_[hash:base64:4]",
    },
  },
});
