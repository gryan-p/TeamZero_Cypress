// class Login {
//     elements = {
//         link_login : () => cy.get('a[href="/login"]'),
//         txt_email : () => cy.get('[data-testid="email"]'),
//         txt_password : () => cy.get('[data-testid="password"]'),
//         btn_login : () => cy.get('[type="submit"]')
//     }

//     login() {
//         this.elements.link_login().click({ timeout: Cypress.env('timeout') })
//         this.elements.txt_email().type(Cypress.env('user_email'))
//         this.elements.txt_password().type(Cypress.env('user_password'))
//         this.elements.btn_login().click();
//     }
// }

// module.exports = new Login();