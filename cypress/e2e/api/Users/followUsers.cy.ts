describe('template spec', () => {
    before(() => {
      cy.login_api(); 
    });
  
    const current_user = '458543c7-4461-4748-8a90-b2ec5ac7ff50'
    const other_user = '751313ac-eb9e-46c4-a431-e076ce816766'

    it('Unfollow users- /users/{id}/unfollow', () => {
        const options = {
        method: 'DELETE',
        url: Cypress.env('url_api') + '/users/' + other_user + '/unfollow',
        headers: {
          authorization: 'Bearer ' + Cypress.env('token')}
        };
    cy.request(options).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

    it('Follow users- /users/{id}/follow', () => {
          const options = {
          method: 'POST',
          url: Cypress.env('url_api') + '/users/' + other_user + '/follow',
          headers: {
            authorization: 'Bearer ' + Cypress.env('token')}
          };
      cy.request(options).then((response) => {
        expect(response.status).to.eq(201)
      })
    })
  
    it('Get folowers - /users/{id}/followers', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'GET',
        url: Cypress.env('url_api') + '/users/' + other_user + '/followers',
        headers: {authorization}
      })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data[0].id).to.eq(current_user)
        expect(response.body.data[0].email).to.eq(Cypress.env('user_email'))
        expect(response.body.data[0].username).to.eq('gryan0526')
        expect(response.body.data[0].fullName).to.eq('Gryan Panulaya')
        
      })
    })
  
  })
  