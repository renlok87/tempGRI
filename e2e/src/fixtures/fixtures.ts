import { test as baseTest } from '@playwright/test';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { LoginPage } from '../pages/login.page';

import {authUserFixtures, authUserFixtureType} from './authUserFixtures';
import {Header} from "src/pages/components/header";
import {userCreds} from "src/utils/constants";

const env = dotenv.config();
dotenvExpand.expand(env);

type Fixtures = {
  users: typeof userCreds
  loginPage: LoginPage;
  header: Header;
};

const fixturedTest = baseTest.extend<
    authUserFixtureType &
    Fixtures
>({
  users: userCreds,
  ...authUserFixtures,
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  header: async ({ page }, use) => await use(new Header(page)),

});

export const test = fixturedTest;
