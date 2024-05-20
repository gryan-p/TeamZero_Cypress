describe('My Library - Categorizing a game', () => {
    before(() => {
        cy.visit('/')
        cy.login_ui()
    });

    after(() => {
        cy.logout_ui()
    })

    it.skip('Categorize a game', () => {
      cy.get('a[href="/games/19301"]')
        .parent()
        .within(() => {
            cy.get('div button:nth-child(1)')
                .click()
        })

    
    })

    it.skip('Go to My Library', () => {
        cy.myLibrary()
        cy.wait(30000)
    })
  })
  