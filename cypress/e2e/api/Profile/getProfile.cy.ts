describe('template spec', () => {
    before(() => {
      cy.login_api();
    });

    // after(() => {
    //   cy.logout_api();
    // });
  
    it.only('Get Profile', () => {
      // const token = Cypress.env('token');
      // const authorization = `bearer ${ token }`;
      const options = {
          method: 'GET',
          url: Cypress.env('url_api') + `/profile`,
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.email).to.eq(Cypress.env('user_email'))
        expect(response.body.username).to.exist
        cy.wait(3000)
      })
    })
  
    it('Get Profile w/ Id', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'GET',
        url: Cypress.env('url_api') + `/profile`,
        qs: {
          "id": "458543c7-4461-4748-8a90-b2ec5ac7ff50"
        },
        headers: {authorization}
      })
      .then((response) => {
        cy.log("response");
        cy.log("Status code validation").then(() => {
          expect(response.status).to.eq(200)
        })

        cy.log("Email Assertion").then(() => {
          expect(response.body.email).to.eq(Cypress.env('user_email'))
        })
        
        cy.log("Username to exist assertion").then(() => {
          expect(response.body.username).to.exist
        })
        
        cy.log("Image to exist assertion").then(() => {
          expect(response.body.image).to.exist
        })
       
        
        
      })
    })
    
  })
  