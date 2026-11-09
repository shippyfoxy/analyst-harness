import { defineConfig } from '@playwright/test';

// E2E_CHROMIUM_PATH runs the tests on an existing Chromium instead of the build this Playwright
// version downloads, such as /opt/pw-browsers/chromium in Claude Code cloud sessions.
const executablePath = process.env.E2E_CHROMIUM_PATH || undefined;

/** Browser tests for the dashboard UI: `npm run test:e2e` (needs a Chromium build). */
export default defineConfig({
  testDir: 'e2e',
  timeout: 60_000,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    browserName: 'chromium',
    viewport: { width: 1280, height: 900 },
    launchOptions: executablePath ? { executablePath } : {},
  },
});
