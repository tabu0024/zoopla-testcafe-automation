import { Selector, t } from 'testcafe';
import { logIn } from "../../pageModels/loginPage";
import { myAccount, getPageUrl } from "../../pageModels/myAccountPage";

import { homePageUrl } from "../../pageModels/loginPage";
import { acceptCookies, selectFromDropdown, emailAlerts } from "../../pageModels/helpers";

fixture('House Price Search')
.page(homePageUrl)

.beforeEach(async () => {
    await acceptCookies()
});

const housePrice = Selector('[data-testid="header-mobile-menu"] [data-track-label="house prices"]');
const searchHousePrices = Selector('[data-testid="autosuggest-input"]');
const searchButton = Selector('[data-testid="search-btn"]');
const firstSearchResult = Selector('li:nth-child(1) > div > a > div > div:nth-child(1) > h2');
const mySearchAddress = "1 Littlejohn Street, Aberdeen, AB10 1FG"
const searchAreaInputBox = Selector('#header-location');
const saleSearch = Selector('[data-testid="search-button"]');
const filters = Selector('[data-testid="search-results-header_filters-button"] [data-testid="filters"]');
const keywords = Selector('#modal-keywords-filter');
const searchResult = Selector('[data-testid="search-result"]');
const sort = Selector('[id="sort-order-dropdown"]');
const duration = Selector('#duration');
const travelSearch = Selector('#search-submit');
const searchInput = Selector('#search-input-location');
const viewAction = Selector('[data-ga-action="View"]');

//first test
test('3- Search for a particular property in the house prices search and confirm that it appears as the first result', async t => {
    await t
        .click(housePrice)
        .click(searchHousePrices)
        .typeText(searchHousePrices, mySearchAddress)
        .click(searchButton)
        //verify the first result location shows the searched house
        .expect(firstSearchResult.innerText).contains(mySearchAddress);

});


test('4- Search houses for sale including the key word “garage” and check that results have garages', async t => {
    await t
        .click(searchAreaInputBox)
        .typeText(searchAreaInputBox, 'London')
        .click(saleSearch)
        .click(filters)
        .typeText(keywords, 'garage')
        .pressKey("enter")
        await selectFromDropdown(sort, 'Lowest price');
        //verify search result has garage
        await t.expect(searchResult.innerText).contains('garage')
        
});

test('5- Save a search for property within 15 minutes drive of SE1 2LH', async t => {
    await t
    .navigateTo('https://www.zoopla.co.uk/travel-time/?search-section=to-rent/')
    .click(searchInput)
    .typeText(searchInput, 'SE1 2LH');
    await selectFromDropdown(duration,'15 minutes' )
    
    await t
    .click(travelSearch)
    //verify there is atleast one result
    .expect(searchResult.count).gte(1);
});

test('6- Check that saved searches can be retrieved', async t => {
    
    await logIn("tabu0024@gmail.com", "Test786..")
    await t
    .click(myAccount)
    .click(emailAlerts)

    const elementsCount= await viewAction.count;
    const thisUrl = await getPageUrl();

    //open each saved search and verify 
    for (let i = 0; i < elementsCount; i++) {
        const elementSelector = viewAction.nth(i);

        await t
        .click(elementSelector)
        .expect(Selector("title").innerText).eql('Property to Rent in E1 - Renting in E1 - Zoopla')
        .navigateTo(thisUrl);
    }
});
