export const practicePageLocators = {
  title: 'div.wrapper h1',
  dropdown: '#dropdown-class-example',
  uploadImage: 'input[type="file"][name="img"]',
  imageContainer: `img[src*="blob:${Cypress.config().baseUrl}"]`,
  openTabBtn: '#opentab',
  hoverContainer: 'div.hover-container',
  hoverContent: 'div.hover-content',
  hoverLink: 'div.hover-content a',
  hideTextboxBtn: '#hide-textbox',
  showTextboxBtn: '#show-textbox',
  textbox: '#displayed-text',
  alertBtn: '#alertbtn',
  alertTextbox: '#name',
  iframe: '#courses-iframe',
  headerContainer: '.header-container'
};
