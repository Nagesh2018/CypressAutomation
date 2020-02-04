/// <reference types = "cypress"/>


describe("Verify Hooks", function () {
    before(function () {
        cy.log("**************Setting up Scripts*****************")
    })

    after(function () {
        cy.log("**************Tear Down Scripts*****************")
    })

    beforeEach(function () {
        cy.log("**************Login Block*****************")
    })

    afterEach(function () {
        cy.log("**************Logout Block*****************")    
    })

    it("Search", function () {
        cy.log("****************This is Searching Test****************")
    })

    it("Advanced Search", function () {
        cy.log("****************This is Advanced Searching Test****************")
    })

    it("Listing Products", function () {
        cy.log("****************This is Listing Products Test****************")
    })
})