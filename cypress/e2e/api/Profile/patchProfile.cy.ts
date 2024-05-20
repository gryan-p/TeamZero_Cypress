describe('Update Profile', () => {
    before(() => {
      cy.login_api();
    });
  
    const a = Math.floor(Math.random() * (1000-1) + 1);
    const biography = 'This an automated biography ' + a.toString();

    it('Update Profile Biography', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'PATCH',
        url: Cypress.env('url_api') + `/profile`,
        body: {
          "bio": biography
        },
        headers: {authorization}
      })
      .then((response) => {
        // cy.log(response);
        cy.log("Status code validation").then(() => {
          expect(response.status).to.eq(200)
        })

        cy.log("Email Assertion").then(() => {
            expect(response.body.email).to.eq(Cypress.env('user_email'))
          })

        cy.log("Biography Assertion").then(() => {
          expect(response.body.bio).to.eq(biography)
        })
      })
    })

    it('Update Language to Filipino', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${ token }`;
        cy.request({
          method: 'PATCH',
          url: Cypress.env('url_api') + `/profile`,
          body: {
            "language": "fil"
          },
          headers: {authorization}
        })
        .then((response) => {
          // cy.log(response);
          cy.log("Status code validation").then(() => {
            expect(response.status).to.eq(200)
          })
  
          cy.log("Email Assertion").then(() => {
              expect(response.body.email).to.eq(Cypress.env('user_email'))
            })
  
          cy.log("Bigraphy Assertion").then(() => {
            expect(response.body.language).to.eq("fil")
          })
        })
      })
    
      it('Update Language to English', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${ token }`;
        cy.request({
          method: 'PATCH',
          url: Cypress.env('url_api') + `/profile`,
          body: {
            "language": "en"
          },
          headers: {authorization}
        })
        .then((response) => {
          // cy.log(response);
          cy.log("Status code validation").then(() => {
            expect(response.status).to.eq(200)
          })
  
          cy.log("Email Assertion").then(() => {
              expect(response.body.email).to.eq(Cypress.env('user_email'))
            })
  
          cy.log("Bigraphy Assertion").then(() => {
            expect(response.body.language).to.eq("en")
          })
        })
      })
  })
  