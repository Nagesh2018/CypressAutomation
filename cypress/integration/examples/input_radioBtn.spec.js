/// <reference types="cypress" />

describe("Check UI Elements", function () {

    it("Input Button", function () {

        cy.visit("http://newtours.demoaut.com/")
        cy.url().should('include', "demoaut");
        cy.get("[name='userName']").should('be.visible').should('be.enabled')
        cy.get("[name='userName']").type("mercury")
        cy.get("[name='password']").should('be.visible').should('be.enabled')
        cy.get("[name='password']").type("mercury")
        cy.get("[name='login']").should('be.visible').click()
        // cy.wait(5000)
        cy.title().should('contain', "Find a Flight")

    })

    it("Radio Button", function () {

        cy.get("[value='roundtrip']").should('be.visible').should('be.checked')
        cy.get("[value='oneway']").should('be.visible').should('not.be.checked').click()
        cy.get("[name='findFlights']").should('be.visible').click()
        cy.title().should('contain', "Select a Flight")

    })

})