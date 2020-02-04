/// <reference types="cypress" />
import LoginPage from '../pageObjects/loginPage'
const lp = new LoginPage()

describe('Test Suite', function () {

    it('Logintest', function () {
        lp.visit()
        lp.enterEmail("admin@yourstore.com")
        lp.enterPassword("admin")
        lp.submitForm()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

})