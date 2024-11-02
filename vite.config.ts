import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    !process.env.VITEST && !isStorybook && remix(),
  ],
    test: {
    environment: "happy-dom",
    // Additionally, this is to load ".env.test" during vitest
    env: loadEnv("test", process.cwd(), ""),
  },
});
