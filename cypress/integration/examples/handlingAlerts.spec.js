
/// <reference types = "cypress" />

describe("Handle Alerts", function(){
    it("Handle Alerts here", function(){
        cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")
        cy.get("[title='Sign in']").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Please enter a valid user name")
        })
    })

    it("Confirmational Alert - Raise Alert Event", function(){
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal("Press a button!")
        })
    })

})