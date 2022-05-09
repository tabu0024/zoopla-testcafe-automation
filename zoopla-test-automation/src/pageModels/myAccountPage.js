import { ClientFunction, Selector } from 'testcafe';

export const getPageUrl = ClientFunction(() => window.location.href.toString());
export const myAccount = Selector('[data-testid="header-profile-account"]');
export const emailFrequency = Selector('div:nth-child(4) > select');

