import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

const isStorybook = process.argv.some((arg) => arg.includes("storybook"));

export default defineConfig({
  plugins: [
    !process.env.VITEST &&
      !isStorybook &&
      remix({
        ignoredRouteFiles: ["**/*.test.{ts,tsx}"],
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
    // !process.env.VITEST && !isStorybook && remix()
  ],
  test: {
    globals: true,
    include: ["./app/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    // setupFiles: ['./tests/setup/setup-test-env.ts'],
    // globalSetup: ['./tests/setup/global-setup.ts'],
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["app/**/*.{ts,tsx}"],
      all: true,
    },
  },
});
