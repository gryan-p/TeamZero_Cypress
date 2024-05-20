describe('template spec', () => {
    before(() => {
      cy.login_api(); 
    });

    const chat_id = '6a082e69-4091-450b-b106-4e832c50ea4c'
    const user_id = '458543c7-4461-4748-8a90-b2ec5ac7ff50'
  
    it('Mute chat - /chats/{{chatID}}/mute', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${ token }`;
        cy.request({
          method: 'PATCH',
          url: Cypress.env('url_api') + '/chats/' + chat_id +'/mute',
          body: {
              "isMute": true
          },
          headers: {authorization}
        })
        .then((response) => {
          
          cy.log("Check response status is 201").then(() => {
              expect(response.status).to.eq(200)
          })
  
          cy.log("Check if mute is true").then(() => {
              expect(response.body.is_mute).to.eq(true)
          })
  
          cy.log("Check chat id").then(() => {
              expect(response.body.chat_id).to.eq(chat_id)
          })
  
          cy.log("Check sender userId").then(() => {
              expect(response.body.user_id).to.eq(user_id)
          })
  
        })
      })

    it('Unmute chat - /chats/{{chatID}}/mute', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'PATCH',
        url: Cypress.env('url_api') + '/chats/' + chat_id +'/mute',
        body: {
            "isMute": false
        },
        headers: {authorization}
      })
      .then((response) => {
        
        cy.log("Check response status is 201").then(() => {
            expect(response.status).to.eq(200)
        })

        cy.log("Check if mute is false").then(() => {
            expect(response.body.is_mute).to.eq(false)
        })

        cy.log("Check chat id").then(() => {
            expect(response.body.chat_id).to.eq(chat_id)
        })

        cy.log("Check sender userId").then(() => {
            expect(response.body.user_id).to.eq(user_id)
        })

      })
    })

  })
  