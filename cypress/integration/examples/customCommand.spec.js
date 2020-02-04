/// <reference types="cypress" />

describe('Built in Command', function () {

    it('Logintest', function () {
        cy.login("admin@yourstore.com","admin")
        cy.title().should('be.equal',"Dashboard / nopCommerce administration")

        cy.login("admin@yourstore.com","admin23") //invalid
        cy.title().should('be.equal',"Your store. Login")

        cy.login("admin@yourstore23.com","admin")
        cy.title().should('be.equal',"Your store. Login")
    })

    it('addCustomer', function () {
        cy.login("admin@yourstore.com","admin")
        cy.log("Adding Customer")
        
    })

    it('editCustomer', function () {
        cy.login("admin@yourstore.com","admin")
        cy.log("Editing Customer")
    })

})