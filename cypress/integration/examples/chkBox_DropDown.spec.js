
/// <reference types = "cypress" />


describe("CheckBox and DropDowns", function(){
    it("Working with CheckBox", function(){

        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.title().should('contain','Register')
        cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
        cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')

        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['Cricket', 'Hockey'])
    })

    it("Skills - DropDown with Select Tag", function(){
        cy.get("select#Skills").select('Android').should('have.value','Android')
    })

    it("Language - Multi Select", function(){
        cy.get("div#msdd").click()
        cy.get(".ui-corner-all").contains('English').click()
        cy.get(".ui-corner-all").contains('Japanese').click()
        // cy.get("[for='usr']").click()
    })

    it("Countries - Searchable DropDown", function(){
        cy.get("[role='combobox']").click({force:true})
        cy.get(".select2-search__field").type('Ind').type('{enter}')
    })
})