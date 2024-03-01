//========================= GLOBAL VARIABLE =================================//
import { inputHomePage } from "../../support/page_objects/homepage";

const web = Cypress.env('ALPHA_BASE_URL');

describe('Login', () => {

  beforeEach(function() {
    cy.checkURL(web);
  })

//POSITIVE CASE : Success When Add User Normally 
  it.only('as a user, i can add to Cart Product', () => {
    inputHomePage.continuepopupCountry();
    inputHomePage.inputUsername();
    inputHomePage.inputPassword();
    inputHomePage.loginButton();
    inputHomePage.womenNavbarResult();
    inputHomePage.productCard();
    inputHomePage.addToCartProductDetail();
    Cypress.Screenshot.defaults({ capture: 'runner' });
  })
  //END POSITIVE CASE : Success When Add User Normally 

 

})  