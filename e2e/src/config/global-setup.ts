import fs from 'node:fs/promises';

// clearing allure result
async function globalSetup(): Promise<void> {
  await fs.rm('./artifacts/allure-results', { force: true, recursive: true });
}

export default globalSetup;
