describe('Heath API', () => {
    before(() => {
      cy.login_api();
    });

    it('Get Games', () => {
      // const token = Cypress.env('token');
      // const authorization = `bearer ${ token }`;
      const options = {
          method: 'GET',
          url: `http://localhost:5000/games`,
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body.data).length.to.be.greaterThan(1)
      })
    })

    it('Get Games with qs', () => {
      // const token = Cypress.env('token');
      // const authorization = `bearer ${ token }`;
      const options = {
          method: 'GET',
          url: `http://localhost:5000/games`,
          qs: {
            platforms: '1',
            genres: '1',
            page: '1',
            limit: '20'
          },
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body.data).length.to.be.greaterThan(1)
      })
    })
})
