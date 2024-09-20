
import { test as setup } from '../fixtures/fixtures';
import { LoginPage } from '../pages/login.page';
import {GrepTitles, LONG_ACTION_TIMEOUT, userCreds} from '../utils/constants';

const AuthUser = `./artifacts/playwright/auth/authUser.json`;

/*When we need a test for an authorized user in the future, we will save the data to the storage.
    Since we are currently writing a test for an unauthorized user, we skip this test.
 */
setup.skip(`${GrepTitles.SETUP} Authenticate as consumer`, async ({ page }) => {
  /* Using ENV better, I`m using this creds from json Only for example */
  const user = userCreds;
  const loginPage = new LoginPage(page);
  await loginPage.login();
  /* It,s the worst practice Dont use stat. timeouts Need await response Only for example */
  await page.waitForTimeout(LONG_ACTION_TIMEOUT);
  await page.context().storageState({ path: AuthUser });
});
