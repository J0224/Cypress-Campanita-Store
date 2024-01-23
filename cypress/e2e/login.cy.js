
describe("Login Process", () => {

  beforeEach(() => {
    // Log a message to indicate that the test is visiting the login page
    console.log("Visiting login page...");

    // Visit the login page
    cy.visit("http://localhost:5173/login");
  
  });

  it("It should display, Welcome Signin Successfully, and take you to home", () => {
    // Log a message to indicate that the test is interacting with the #email element
    console.log("Interacting with #email element...");

    cy.get('[name="email"]').type("josemiguelmateo2@gmail.com");

    cy.get('[name="password"]').type("Campanita1992@");

    cy.get("#SubmitLogin").click();

    cy.wait(5000);
    // Verify the URL after login
    cy.url().should("eq", "http://localhost:5173/products");

    // Log a message to indicate that the test is done
    console.log("Done with the test!");
  });

  it("It should display an error message, Ivalid Inputs", () => {

    console.log("Interacting with email form...");

    cy.get('[name="email"]').type("josemiguelmateo2@gmail.com");
    cy.get('[name="password"]').type("Campanita123");
    cy.get("#SubmitLogin").click();

    cy.wait(5000);
    cy.url().should("eq", "http://localhost:5173/login");

    console.log("Done with the fail proccess");

  });

  it("It should display error message no account found with that email", () => {

    console.log("Interacting with email form...");

    cy.get('[name="email"]').type("josemiguelmateo2mateo@gmail.com");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get("#SubmitLogin").click();
    
    cy.wait(5000);
    cy.url().should("eq", "http://localhost:5173/login");

    console.log("Done with the fail proccess");

  });


});
