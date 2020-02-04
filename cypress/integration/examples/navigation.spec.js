/// <reference types='cypress'/>

describe("Browser Navigation", function(){
    it("Navigate fwd", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq',"nopCommerce demo store")
        
        cy.get(".ico-register").click()
        cy.title().should('be.eq',"nopCommerce demo store. Register")

        cy.go('back')
        cy.title().should('be.eq',"nopCommerce demo store")

        cy.go('forward')
        cy.title().should('be.eq',"nopCommerce demo store. Register")

        cy.go(-1)
        cy.title().should('be.eq',"nopCommerce demo store")

        cy.go(1)
        cy.title().should('be.eq',"nopCommerce demo store. Register")

        cy.reload()
    })
})