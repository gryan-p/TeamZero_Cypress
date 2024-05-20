# TeamZero_Cypress

# Cypress Typescript Automation for TeamZero
This framework was built for Munters end to end testing

### Installation Prcess
- Clone Git Repository
- run `npm install`  on Project folder (need to install NodeJS in your PC)

### Setting Test Environment
- Go to `cypress.config.ts`
- Enter 'user_email' and 'user_password'

### Running Cypress
- run `npx cypress open`
- click the e2e testing
- choose a browser and click the `Start E2E Testing in ...` button
- Click the test you want to run e.g. `getUser.cy.ts`

### Running Cypress headles
- run `npx cypress run`

### Notes
- For API test, you also need to change some id depending on your local