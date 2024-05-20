describe('template spec', () => {
  before(() => {
    cy.login_api(); 
  });

  it('Get Chat - /chats', () => {
    // const token = Cypress.env('token');
    // const authorization = `bearer ${ token }`;
    const options = {
        method: 'GET',
        url: Cypress.env('url_api') + `/chats`,
        headers: {
          authorization: 'Bearer ' + Cypress.env('token')}
        };
    cy.request(options).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.limit).to.eq(10)
      expect(response.body.data).length.to.be.greaterThan(1)
    })
  })

  it('Get Message - /chats/{id}/messages', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${ token }`;
    cy.request({
      method: 'GET',
      url: Cypress.env('url_api') + '/chats/c2c17c34-9778-4011-9c0f-fc5e2ca52e92/messages',
      // body: {

      // }
      headers: {authorization}
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.limit).to.eq(10)
      expect(response.body.totalCount).to.eq(2)
      expect(response.body.data).length.to.be.greaterThan(1)
    })
  })

  it('Search Chat - /chats/{id}/search', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${ token }`;
    cy.request({
      method: 'GET',
      url: 'http://localhost:5000/chats/c2c17c34-9778-4011-9c0f-fc5e2ca52e92/search',
      qs: {
        "term": "hello"
      },
      headers: {authorization}
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.limit).to.eq(5)
      expect(response.body.totalCount).to.eq(2)
      // expect(response.body.data).length.to.be.greaterThan(1)
    })
  })

  
})
