import { emailAlerts, selectFromDropdown,acceptCookies } from "../../pageModels/helpers";
import { homePageUrl, logIn } from "../../pageModels/loginPage";
import { emailFrequency, myAccount } from "../../pageModels/myAccountPage";
import { createEmailAlert, emailAlertSuccessMessage, searchRentals, searchResultTitle, totalResult } from "../../pageModels/toRentPage";


fixture('Email Registration')
.page(homePageUrl)
.meta({integration: 'true' })

    .beforeEach(async () => {
        //open the login page before every test
        await acceptCookies();
        await logIn("tabu0024@gmail.com", "Test786..")
       
    });

//first test
test('1-Register for daily email updates on rental property in London for 1 bed properties between £800 and £1000 per month', async t => {

    //helper function to search rentals
    await searchRentals('E1', '£800 pcm', '£1,000 pcm', 'Show all', '1+')

    //assertions to verify the test
    await t
        .expect(searchResultTitle.innerText).contains("Property to rent in E1")
        .expect(totalResult.count).gt(0)
        .click(createEmailAlert)
        .expect(emailAlertSuccessMessage.innerText).contains("Success! Your email alert has been created");
});


//second test
test('2-Change the frequency of an existing email update', async t => {
    var elementsCount = await emailFrequency.count;

    await t
        .click(myAccount)
        .click(emailAlerts)

    //looping over all the saved searches
    for (let i = 0; i < elementsCount; i++) {
        const elementSelector = emailFrequency.nth(i);

        //helper function to select from dropdown
        await selectFromDropdown(elementSelector, "Weekly summary emails")

        //assertion to verify test result
        await t.expect(elementSelector.value).eql('Weekly summary emails');
    }
});