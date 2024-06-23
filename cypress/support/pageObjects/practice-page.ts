/// <reference types="cypress" />
import { practicePageLocators } from '../locators/practisePageLocators';
class PracticePage {
  get title() {
    return cy.get(practicePageLocators.title);
  }

  get dropdown() {
    return cy.get(practicePageLocators.dropdown);
  }

  get uploadImage() {
    return cy.get(practicePageLocators.uploadImage);
  }

  get imageContainer() {
    return cy.get(practicePageLocators.imageContainer);
  }

  get openTabBtn() {
    return cy.get(practicePageLocators.openTabBtn);
  }

  get hoverContainer() {
    return cy.get(practicePageLocators.hoverContainer);
  }

  get hoverContent() {
    return cy.get(practicePageLocators.hoverContent);
  }

  get hideTextboxBtn() {
    return cy.get(practicePageLocators.hideTextboxBtn);
  }

  get showTextboxBtn() {
    return cy.get(practicePageLocators.showTextboxBtn);
  }

  get textbox() {
    return cy.get(practicePageLocators.textbox);
  }

  get alertBtn() {
    return cy.get(practicePageLocators.alertBtn);
  }

  get alertTextbox() {
    return cy.get(practicePageLocators.alertTextbox);
  }

  get iframe() {
    return cy.get(practicePageLocators.iframe);
  }

  get headerContainer() {
    return cy.get(practicePageLocators.headerContainer);
  }

  getHoverLink(index: number) {
    return cy.get(practicePageLocators.hoverLink).eq(index);
  }

  validateHoverOptions() {
    this.getHoverLink(0).should('be.visible').and('contain.text', 'Top');
    this.getHoverLink(1).should('be.visible').and('contain.text', 'Reload');
  }

  setOpenTabFunc(newUrl: string) {
    cy.window().then((win) => {
      win.eval(`
        function openTab() {
          window.open(\`${newUrl}\`, '_self');
        }
      `);
    });
  }
}
export default new PracticePage();
