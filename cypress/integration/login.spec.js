describe('Login test', () => {
  it('Can login with email and password', () => {
    // load the page
    cy.visit('http://localhost:8080')
    // enter login credentials
    cy.get('.login-email').type('test@mail.com')
    cy.get('.login-password').type('password')
    // click the login button
    cy.get('.login-button').click()
    // assert profile page destination
    cy.url().should('include', '/profile')
  })
})
