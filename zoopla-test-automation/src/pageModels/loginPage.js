import { Selector, t } from 'testcafe';
import { getPageUrl } from "./myAccountPage";

export const homePageUrl = "https://www.zoopla.co.uk"
export const logInPageURL = "https://www.zoopla.co.uk/signin/?page_after_login=%2F&return_url=%2F&with_confirmation=true";
export const signIn = Selector('[data-testid="header-profile-sign-in"]');
export const userEmail = Selector('[data-testid="email-field-input"]');
export const userPassword = Selector('[data-testid="password-field"]');
export const signInButton = Selector('[data-testid="signin-button"]');

//login function 
export async function logIn(username, password) {
    await t
        .navigateTo(logInPageURL)
    await t
        .typeText(userEmail, username) 
        .typeText(userPassword, password) 
        .click(signInButton)
        .expect(getPageUrl()).contains('signin', {timeout: 10000})
};

