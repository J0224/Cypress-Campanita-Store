describe("Learning to Test in Cypress", () => {


  it('positive test, should pass', () => {
    
    cy.visit("http://localhost:5173");

    cy.title().should("eq", "Campanita Store");
    
  });


  it('negative test, should fail', () => {
    
    cy.visit("http://localhost:5173");

    cy.title().should("eq", "Campanita Store Mundial");
    
  });



});