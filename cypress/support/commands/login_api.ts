Cypress.Commands.add('login_api', () => {
    // (you can use the authentification via API request)
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:5000/auth/login',
            body: {
                email: Cypress.env('user_email'),
                password: Cypress.env('user_password')
            },
        })
        .as('loginResponse')
        .then((response) => {
            Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
            return response;
        })
        .its('status')
        .should('eq', 201);
})