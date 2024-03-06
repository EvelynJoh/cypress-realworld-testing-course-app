describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

     it("does not allows an invalid email address", () => {
    const email = "	evelyn.johannsen@docc.techstarter.de"
    cy.getByData("email-input").type(email, {force: true})
    cy.getByData("submit-button").click({force: true})
    cy.getByData("success-message").should("not.exist")
  })

    afterEach(() => {
        cy.log('Test finished')
    })
})