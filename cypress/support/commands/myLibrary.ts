Cypress.Commands.add('myLibrary', () => {
    const MyLibraryLink = cy.get('li[class="nav-menu uppercase false"] a[href="/my-library"]');
    MyLibraryLink.click({force: true});

    cy.get('h1').contains('My Library').should('exist');
    cy.get('span').contains('All Games').should('exist');
    cy.get('span').contains('Uncategorized').should('exist');
    cy.get('span').contains('Playing').should('exist');
    cy.get('span').contains('Completed').should('exist');
    cy.get('span').contains('Played').should('exist');
    cy.get('span').contains('Not Played').should('exist');

})