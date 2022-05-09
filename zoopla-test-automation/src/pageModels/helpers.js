import { Selector, t } from 'testcafe';

export const pageHasLoaded = Selector('body.data-reactroot')();
export const acceptCookiesButton = Selector('#save');
export const emailAlerts = Selector('.icon.icon-bell');

//helper function to accept the cookies 
export async function acceptCookies() {
    await t
        .switchToIframe('#gdpr-consent-notice')
        .click(acceptCookiesButton)
        .switchToMainWindow()
};

//helper function to select from dropdown
export async function  selectFromDropdown(selector, text) {
    const dropdown =  selector.find('option');

    await t
        await t.click(selector)
            .click(dropdown.withText(text))
};





