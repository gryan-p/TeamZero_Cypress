describe('Heath API', () => {
    before(() => {
      cy.login_api();
    });

    it('Get Games', () => {
      // const token = Cypress.env('token');
      // const authorization = `bearer ${ token }`;
      const options = {
          method: 'PUT',
          url: `http://localhost:5000/top-games/ae0c4ffd-c0c1-4494-b92d-1304ad78ab10`,
          body: {
            "gameId": 3070
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
