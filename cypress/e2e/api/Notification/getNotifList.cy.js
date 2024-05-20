describe('template spec', () => {
    before(() => {
      cy.login_api();
    });
  
    it('Get Notification List - /notifications/list', () => {
      const options = {
          method: 'GET',
          url: Cypress.env('url_api') + `/notifications/list`,
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        cy.log("Status code validation").then(() => {
            expect(response.status).to.eq(200)
          })
  
          cy.log("Details").then(() => {
            expect(response.body.limit).to.eq(25)
            expect(response.body.page).to.eq(1)
            expect(response.body.totalCount).to.eq(5)
          })
          
          cy.log("Check if data exist").then(() => {
            expect(response.body.data).to.exist
          })
          
      })
    })
    
  })
  