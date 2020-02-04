/// <reference types="cypress" />

class loginPage {

    visit() {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    enterEmail(value) {
        const eField = cy.get("#Email")
        eField.clear()
        eField.type(value)
        return this
    }

    enterPassword(value) {
        const eField = cy.get("[id='Password']")
        eField.clear()
        eField.type(value)
        return this
    }

    submitForm() {
    const btn = cy.get("[type='submit']")
        btn.click()
    }

}

module.exports  = loginPage