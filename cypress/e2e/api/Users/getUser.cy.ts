describe('template spec', () => {
    before(() => {
      cy.login_api(); 
    });
  
    it('Get User- /users', () => {
          const options = {
          method: 'GET',
          url: Cypress.env('url_api') + `/users`,
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  
    it('Get User by ID - /users/{id}', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'GET',
        url: Cypress.env('url_api') + '/users/458543c7-4461-4748-8a90-b2ec5ac7ff50',
        headers: {authorization}
      })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.email).to.eq(Cypress.env('user_email'))
        expect(response.body.username).to.eq('gryan0526')
        expect(response.body.id).to.eq('458543c7-4461-4748-8a90-b2ec5ac7ff50')
      })
    })
  
  })
  