

describe('My First TestSuite', function () {
    it('Verify Page Title-Positive', function () {
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq', 'nopCommerce demo store')
    })
    it('Verify Page Title-Negative', function () {
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq', 'demo store')
    })
})