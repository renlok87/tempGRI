import { Locator, Page } from '@playwright/test';


export class authUserInboxPage {
  public readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
