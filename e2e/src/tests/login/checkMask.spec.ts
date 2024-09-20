
import {GrepTitles, userCreds} from "src/utils/constants";
import {expect} from "@playwright/test";
import {test} from "src/fixtures/fixtures";


test(`${GrepTitles.REGRESS} [T204] Check mask cross icon is visible`, async ({
     loginPage,
    page,
    header
    }) => {
    await test.step('Go to login page', async () => {
        await page.goto('/');
        await header.openAccountLoginPage();
        await expect(loginPage.loginTitle).toBeVisible();
    });
    await test.step('Fill phone number and check cross icon is visible', async () => {
        await loginPage.fillNumberInput(userCreds.phone);
        await expect(loginPage.crossIcon).toBeVisible();
    });
});