import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

const isStorybook = process.argv.some(arg => arg.includes("storybook"));

export default defineConfig({
  plugins: [ !process.env.VITEST && !isStorybook &&
    remix({
    ignoredRouteFiles: ['**/*.test.{ts,tsx}'],
  })
    // !process.env.VITEST && !isStorybook && remix()
  ],
  test: {
    globals: true,
		include: ['./app/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
		// setupFiles: ['./tests/setup/setup-test-env.ts'],
		// globalSetup: ['./tests/setup/global-setup.ts'],
		restoreMocks: true,
		coverage: {
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
	},
});
