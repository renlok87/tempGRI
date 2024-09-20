import { Locator, Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('link', { name: 'Войти' });
  }
  async openAccountLoginPage() {
    await this.loginButton.click();
  }
}
