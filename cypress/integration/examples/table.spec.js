/// <reference types='cypress'/>
describe("Check Value in WebTable", function () {
    it("Verify Text in WebTable", function () {
        cy.visit("http://testautomationpractice.blogspot.com/")

        // Check Text anywhere in the table
        cy.get("table[name='BookTable']").contains('td', 'Learn Selenium').should('be.visible')

        // Verify Text in Specify Cell
        cy.get("table[name='BookTable'] > tbody > tr:nth-child(2) > td:nth-child(3)").contains('Selenium').should('be.visible')

        // Verify book Name is "Master in Java" where author is Amod
        cy.get("table[name='BookTable'] > tbody > tr td:nth-child(2)").each(($el, index, $list) => {
            if ($el.text().includes('Amod')) {
                cy.get("table[name='BookTable'] > tbody > tr td:nth-child(1)").eq(index).then(bName => {
                    expect(bName.text()).to.equal("Master In Java")
                })
            }
        })

    })
})