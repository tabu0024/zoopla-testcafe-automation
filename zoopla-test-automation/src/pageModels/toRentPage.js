import { Selector, t } from 'testcafe';
import { selectFromDropdown } from "./helpers";
import { getPageUrl } from "./myAccountPage";

export const toRent = Selector('a[data-track-label="to rent"]');
export const createEmailAlert = Selector('[data-testid="create-email-alert-button"]');
export const emailAlertSuccessMessage = Selector('.css-1wd1hol-Heading4-StyledHeading');
export const searchResultTitle = Selector('[data-testid="results-title"]');
export const totalResult = Selector('[data-testid="search-result"]');

const areaSearch = Selector('#search-input-location');
const minPrice = Selector('.ui-form__select-wrap #rent_price_min_per_month');

const maxPrice = Selector('#rent_price_max_per_month');
const maxPriceOption = maxPrice.find('option');

const propertyType = Selector('#property_type');
const propertyTypeOption = propertyType.find('option');

const noOfBedrooms = Selector('[data-search-field=beds]');
const noOfBedroomsOption = noOfBedrooms.find('option');

const searchButton = Selector('#search-submit');


export async function searchRentals(postcode, minP, maxP, propertyTp, noOfRooms) {
    await t
        .click(toRent)
        .expect(getPageUrl()).contains('to-rent')
        .typeText(areaSearch, postcode)
    await selectFromDropdown(minPrice, minP);
    await selectFromDropdown(maxPrice, maxP);
    await selectFromDropdown(propertyType, propertyTp);
    await selectFromDropdown(noOfBedrooms, noOfRooms);
    await t
        .click(searchButton)
};