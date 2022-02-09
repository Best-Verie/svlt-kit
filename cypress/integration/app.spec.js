
describe("Button tests", () => {
   
    before(() => {
        cy.visit("http://localhost:8080")
    })


    it("should find todo button and fill the form and submit", () => {
      cy.get('button[id="addTodoBtn"]').click()
      cy.get('input[id="addTodoEl"]').type("Test")
      cy.get('input[id="todoDate"]').type("2003-02-23")
      cy.get('button[id="todoSubmit"]').click()

      cy.get('div[id="todoContainer"]').find("div")
      

    })
}) 