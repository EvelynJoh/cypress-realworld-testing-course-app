describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('the h1 contains the correct text', () => {
  //cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
  })
  it("the features on the hompage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
  afterEach(() => {
      cy.log('Test finished')
  })
})