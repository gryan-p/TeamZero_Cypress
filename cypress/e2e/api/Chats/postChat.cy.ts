describe('template spec', () => {
    before(() => {
      cy.login_api(); 
    });
  
    const a = Math.floor(Math.random() * (1000-1) + 1);
    const chat_message = 'This an automated chat message ' + a.toString();

    it('Post Message - /chats/{{chatID}}/messages', () => {
      const token = Cypress.env('token');
      const authorization = `bearer ${ token }`;
      cy.request({
        method: 'POST',
        url: Cypress.env('url_api') + '/chats/6a082e69-4091-450b-b106-4e832c50ea4c/messages',
        body: {
            "message" : chat_message
        },
        headers: {authorization}
      })
      .then((response) => {
        
        cy.log("Check response status is 201").then(() => {
            expect(response.status).to.eq(201)
        })

        cy.log("Check chat id").then(() => {
            expect(response.body.chat.id).to.eq("6a082e69-4091-450b-b106-4e832c50ea4c")
        })

        cy.log("Check sender userId").then(() => {
            expect(response.body.sender.id).to.eq("458543c7-4461-4748-8a90-b2ec5ac7ff50")
        })

        cy.log("Check chat message").then(() => {
            expect(response.body.message).to.eq(chat_message)
            cy.log(chat_message)
        })
        
        
        
      })
    })
  })
  