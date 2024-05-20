Cypress.Commands.add('logout_ui', () => {
    const profileLink = cy.get('span[id] img');
    profileLink.click();

    const logoutLink = cy.get('span').contains('Log out')
    logoutLink.click();
})