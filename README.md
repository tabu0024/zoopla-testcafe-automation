# Zoopla Tech Challenge - Quality Team

Welcome!

Thank you again for considering Zoopla for the next stage of your career. This tech challenge is designed as a chance for you to show us what you can do.

We appreciate that you are taking time out of your schedule to do this, and we thank you and promise to give you feedback on your submission.

If you run out of time, first of all don’t panic. Secondly, just let us know what you would have done next or differently if you’d had more time.

This test is designed for us to get an insight into how you think, work, and what you’re comfortable with. We believe everyone and everything can always improve, so if you have any feedback for us on this challenge, please do share it. :) 

## The Challenge
Your task, should you choose to accept it, is to create a basic automation suite to verify several user journeys on the  [zoopla.co.uk](http://zoopla.co.uk/)  site, and then submit a PR to this repo as if it was part of your day to day work here at Zoopla.

The user journeys we would like you to automate are:
- Register for daily email updates on rental property in London for 1 bed properties between £800 and £1000 per month
- Change the frequency of an existing email update
- Search for a particular property in the house prices search and confirm that it appears as the first result
- Search houses for sale including the key word “garage” and check that results have garages
- Save a search for property within 15 minutes drive of SE1 2LH.
- Check that saved searches can be retrieved

> NOTE: Please ONLY submit the forms _required_ for this technical test.

Zoopla's core languages are:
- JavaScript
- Python
- C#

We are also migrating our End-to-End automated regression suite to Cypress.

Please don’t feel you *must* use the languages above, or Cypress to complete this challenge; we'd rather see an excellent solution which suitably demonstrates your skillset.

There is no time limit for this task but we suggest around 2 hour as a guide

Thank you, and good luck!

The Zoopla Quality Team


## ________________Running the Zoopla-test-automation_________________
## Introduction:
Created a basic automation framework using TestCafe framework in JavaScript that will run on chrome browser.
The test dependencies are included in the package.json
The script that runs the tests is included in the package.json

## Dependencies to run Testcafe tests(Zoopla-test-automation): 
1- npm
2- node modules
3- testcafe

## To run the test run following commands in terminal :
1- do: npm install
2- npm run test

## Scope for improvements and expansion:
We can expand this existing framework by adding following features to it:
1- Run the tests on any browser in parallel, run on remote browsers, mobile browsers
2- Schedule the tests in deployment pipelines
3- Generate traceable reports with screenshots on failures
4- Configure with BDD framework like Cucumber
