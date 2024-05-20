describe('Heath API', () => {
    before(() => {
      cy.login_api();
    });

    it('Get Games', () => {
      // const token = Cypress.env('token');
      // const authorization = `bearer ${ token }`;
      const options = {
          method: 'GET',
          url: `http://localhost:5000/top-games`,
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body.data).length.to.be.greaterThan(1)
      })
    })

})
