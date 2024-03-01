const elementSearch = {

    username: () => cy.get('[id="CustomerEmail"]'),
    password: () => cy.get('[id="CustomerPassword"]'),
    login: () => cy.get('[class="w-full h-[60px] flex items-center justify-center gap-[20px] bg-black text-white hover:bg-white hover:text-black text-[14px] tracking-wide uppercase font-semibold border-[1px] border-black"]'),
    wait: () => cy.wait(2000),
    continue: () => cy.get('[class="recommendation-modal__button"]'),
    menNavbar: () => cy.get('[class="tracking-wider font-normal group-hover/item:underline capitalize"]').contains('women'),
    productCardWomen: () => cy.get('[class="snize-overhidden"]').contains('golden goose shearling-panel glitter sneakers'),
    addToCart: () => cy.get('[class="product-form__buttons"]').contains('add to cart'),


}

export default elementSearch;