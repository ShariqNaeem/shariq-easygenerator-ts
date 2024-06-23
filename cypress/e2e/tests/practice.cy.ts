import practicePage from '../../support/pageObjects/practice-page';

describe('This File Contains Practice Page Testcases', () => {
  beforeEach(() => {
    cy.visit(`/${Cypress.env('taskFileName')}`);
  });

  it('TC-0001 Validate the practice page title', () => {
    cy.log('Step-1: Verify the title text');
    practicePage.title.should('have.text', `${Cypress.env('title')}`);
  });

  it('TC-0002 Set the dropdown option by using value', () => {
    cy.log('Step-1: Select dropdown by value');
    practicePage.dropdown.select(`${Cypress.env('dropdownOptionValue')}`);
  });

  it('TC-0003 Validate image upload successfully', () => {
    cy.log('Step-1: Validate image container should not be exist initially');
    practicePage.imageContainer.should('not.exist');

    cy.log('Step-2: Upload the image file');
    practicePage.uploadImage.selectFile(`${Cypress.env('imagePath')}`, {
      force: true,
    });

    cy.log('Step-3: Validate image container should be visible');
    practicePage.imageContainer.should('be.visible');
  });

  it('TC-0004 Validate display hover content on mouse hover', () => {
    cy.log('Step-1: Hover content should be displayed');
    practicePage.hoverContainer.trigger('mouseover');
    practicePage.hoverContent.should('be.visible');

    cy.log('Step-2: Verify the text of hover options');
    practicePage.validateHoverOptions();

    cy.log('Step-3: Hover options should disappeared');
    practicePage.hoverContainer.trigger('mouseleave');
    practicePage.hoverContent.should('not.be.visible');
  });

  it('TC-0005 Validate open the new tab in the same window', () => {
    cy.log('Step-1: Set the new tab URL as easygenerator');
    practicePage.setOpenTabFunc(`${Cypress.env('easyGeneratorURL')}`);

    cy.log('Step-2: Click on the opn tab button');
    practicePage.openTabBtn.click();

    cy.log('Step-3: Validate the new URL should be easy generator url');
    cy.origin(Cypress.env('easyGeneratorURL'), () => {
      cy.url().should('include', `${Cypress.env('easyGeneratorURL')}`);
    });
  });

  it('TC-0006 Validate the show and hide functionality working properly', () => {
    cy.log('Step-1: Check that textbox should be displayed initially');
    practicePage.textbox.should('be.visible');

    cy.log(
      'Step-2: Click on the hide button and checked that textbox should not be visible'
    );
    practicePage.hideTextboxBtn.should('be.visible').click();
    practicePage.textbox.should('not.be.visible');

    cy.log(
      'Step-3: Click on the show button and checked that textbox should be dispalyed'
    );
    practicePage.showTextboxBtn.should('be.visible').click();
    practicePage.textbox.should('be.visible');
  });

  it('TC-0007 Read the alert txt file and shows its content to invoke alert', () => {
    cy.log('Step-1: Read the alert-text file and set its content to the alert');
    cy.task('readFileText', `${Cypress.env('alertTextFile')}`).then(
      (alertText) => {
        cy.window().then((win) => {
          win.eval(`
          function displayAlert() {
            alert(
              \`${alertText}\`
            );
          }
        `);
          cy.stub(win, 'alert').as('alert');
        });

        cy.log('Step-2: Cick on alert button and validate the alert content');
        practicePage.alertBtn.click();
        cy.get('@alert').should('have.been.calledWith', alertText);
      }
    );
  });

  it('TC-0008 Perform any action with in the iframe', () => {
    cy.log('Step-1: Verify the title text');
    practicePage.title.should('have.text', `${Cypress.env('title')}`);

    cy.log('Step-2: Verify the header visibility with in the iFrame');
    // NOTE:
    // We can handle the iFrame with the same origin by using the below piece of code.
    // But If we are trying with cross domain iFrame then we are not going to have luck due to browser security policy...
    // practicePage.headerContainer
    //   .its('0.contentDocument.body')
    //   .then(cy.wrap)
    //   .get('.new-main-header')
    //   .should('be.visible');
  });
});
