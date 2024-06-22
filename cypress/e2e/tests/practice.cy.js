import practicePage from "../../support/pageObjects/practice-page";

describe('This File Contains Practice Page Testcases', () => {
  beforeEach(() => {
    cy.visit('/task.html')
  })

  it('Validate the practice page title', () => {
    practicePage.title.should('have.text', 'Practice Page')
  })
})
