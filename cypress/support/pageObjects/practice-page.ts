/// <reference types="cypress" />

class PracticePage {
  get title() {
    return cy.get('div.wrapper h1');
  }
}
export default new PracticePage();
