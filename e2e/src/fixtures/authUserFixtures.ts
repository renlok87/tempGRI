import { test as base } from '@playwright/test';
import { Header } from '../pages/components/header';
import { authUserInboxPage } from 'src/pages/roles/authUser/inbox.page';


export type authUserFixtureType = {
  _authUserActor;
  authUserHomePage;
};
export const authUserFixtures: Parameters<typeof base.extend<authUserFixtureType>>[0] = {
  async _authUserActor({browser}, use) {
    /*Usually a function is added here to check the existence of this file. In this implementation I did not add additional logic*/
    const context = await browser.newContext({
      storageState: './artifacts/playwright/auth/authUser.json',
    });
    await use(await context.newPage());
    await context.close();
  },
  async authUserHomePage({_authUserActor}, use) {
    await use(new authUserInboxPage(_authUserActor));
    await use(new Header(_authUserActor));
  },
};
