// exportnya spesifik
import { elementSearch } from "./element";

const element = {

  inputUsername : () => {
    elementSearch.username().type('cekpointesting@gmail.com');
  },
  inputPassword : () => {
    elementSearch.password().type('qwerty123');
  },
  loginButton : () => {
    elementSearch.login().click();
  },

  continuepopupCountry : () => {
    elementSearch.continue().click();
  },

  waitBrowserpage : () => {
    elementSearch.wait()
  },

  womenNavbarResult : () => {
    elementSearch.menNavbar().click();
  },

  productCard : () => {
    elementSearch.productCardWomen().click();
  },

  addToCartProductDetail : () => {
    elementSearch.addToCart().click();
  }
  
}
export const inputHomePage = element