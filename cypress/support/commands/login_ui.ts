Cypress.Commands.add('login_ui', () => {
    const loginLink = cy.get('a[href="/login"]');
    loginLink.click();

    const emailInput = cy.get('[data-testid="email"]');
    const passwordInput = cy.get('[data-testid="password"]');
    const loginButton = cy.get('[type="submit"]');
    emailInput.type(Cypress.env('user_email'), { timeout: Cypress.env('timeout') });
    passwordInput.type(Cypress.env('user_password'));
    loginButton.click();

    cy.get('a[href="/my-library"]').should('be.visible')
    cy.get('img[alt="fallout-4"]').should('be.visible')
})