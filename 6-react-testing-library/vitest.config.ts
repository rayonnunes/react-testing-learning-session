/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./test/test-setup.ts"],
      coverage: {
        enabled: true,
        provider: "istanbul",
        reporter: ["json", "text", "html", "clover"],
        reportsDirectory: "./test/coverage",
        thresholds: {
          global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
          },
        },
      },
    },
  })
);
