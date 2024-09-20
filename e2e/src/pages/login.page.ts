import {BrowserContext, expect, Locator, Page} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginTitle: Locator;
  readonly numberInput: Locator;
  readonly crossIcon: Locator;

  constructor(page: Page, context?: BrowserContext) {
    this.page = page;
    this.loginTitle = page.getByRole('link', { name: 'Войти' });
    this.numberInput = page.getByPlaceholder('+7 ');
    this.crossIcon =page.locator('form').filter({ hasText: 'Войти или по номеру телефона Получить код Нажимая «Получить код», я соглашаюсь с пользовательским соглашением, c условиями участия в Клубе SUNLIGHT, политикой конфиденциальности и подтверждаю согласие на получение сообщений рекламного характера. Отказаться от рассылки можно в личном кабинете' }).getByRole('img');
  }
  async login(data: string) {
    /*login logic*/
  }
  async fillNumberInput(data: string) {
    await this.numberInput.click();
    await this.numberInput.fill(data);
  }
}
