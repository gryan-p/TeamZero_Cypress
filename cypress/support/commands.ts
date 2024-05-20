// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login_api', () => {
//     // (you can use the authentification via API request)
//     return cy
//         .request({
//             method: 'POST',
//             url: 'http://localhost:5000/auth/login',
//             body: {
//                 email: Cypress.env('user_email'),
//                 password: Cypress.env('user_password')
//             },
//         })
//         .as('loginResponse')
//         .then((response) => {
//             Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
//             return response;
//         })
//         .its('status')
//         .should('eq', 201);
// })
