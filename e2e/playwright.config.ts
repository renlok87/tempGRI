import { defineConfig, devices, type ReporterDescription } from '@playwright/test';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const env = dotenv.config();

dotenvExpand.expand(env);

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './src/tests',
  outputDir: './artifacts/test-results',

  // Global Setup to run before all tests
  globalSetup: './src/config/global-setup',

  /* Maximum time one test can run for. */
  timeout: 180 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Without retries */
  retries: 0,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: [
    ['./src/config/CustomReporterConfig.ts'],
    ['allure-playwright', { outputFolder: './artifacts/allure-results',  detail: true }],
    ['html', { outputFolder: './artifacts/reports', open: 'never' }],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    bypassCSP: true,
    launchOptions: {
      args: ['--disable-web-security']
    },
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */

    //NEED USE from ENV//
    baseURL: `https://sunlight.net/`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    // here's a temporary solution untill we resolve problem with filechooser in chrome
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chrome',
      dependencies: ['setup'],
      use: { ...devices['Google Chrome'] },
    },
  ],
});
