describe("Signup Process", () => {

  beforeEach(() => {

    // Log a message to indicate that the test is visiting the signup page
    console.log("Visiting signup page...");

    // Visit the signup page
    cy.visit("http://localhost:5173/signup");

  
  });
  

  it("Should successfully signup a new user", () => {
 
    cy.get('[name="name"]').type("Juan Carlos");
    cy.get('[name="lastName"]').type("Mateo Santos");
    cy.get('[name="email"]').type("juancarlosmateo@gmail.com");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get('[name="confirmPassword"]').type("Campanita2020@");
    cy.get('[name="phone"]').type("8294744948");
    cy.get('[name="streetAddress"]').type("Sagradio Dias #6");
    cy.get('[name="city"]').type("Villa Altagracia");
    cy.get('[name="state"]').type("San Cristobal");
    cy.get('[name="zipCode"]').type("91000");
    cy.get("#CheckBox").check();
    cy.get("#Submit").click();
   
    cy.wait(5000);
    // Verify the URL after signup
    cy.url().should("eq", "http://localhost:5173/signup");
  });

  it("Should display an error message email already exist", () => {
 
    cy.get('[name="name"]').type("Juan Carlos");
    cy.get('[name="lastName"]').type("Mateo Santos");
    cy.get('[name="email"]').type("juancarlosmateo@gmail.com");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get('[name="confirmPassword"]').type("Campanita2020@");
    cy.get('[name="phone"]').type("8294744948");
    cy.get('[name="streetAddress"]').type("Sagradio Dias #6");
    cy.get('[name="city"]').type("Villa Altagracia");
    cy.get('[name="state"]').type("San Cristobal");
    cy.get('[name="zipCode"]').type("91000");
    cy.get("#CheckBox").check();
    cy.get("#Submit").click();
   
    cy.wait(5000);
    // Verify the URL after signup
    cy.url().should("eq", "http://localhost:5173/signup");
  });


  it("Should display error message enter valid phone number", () => {
 
    cy.get('[name="name"]').type("Juan Carlos");
    cy.get('[name="lastName"]').type("Mateo Santos");
    cy.get('[name="email"]').type("juancarlosmateo@gmail.com");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get('[name="confirmPassword"]').type("Campanita2020@");
    cy.get('[name="phone"]').type("829474");
    cy.get('[name="streetAddress"]').type("Sagradio Dias #6");
    cy.get('[name="city"]').type("Villa Altagracia");
    cy.get('[name="state"]').type("San Cristobal");
    cy.get('[name="zipCode"]').type("91000");
    cy.get("#CheckBox").check();
    cy.get("#Submit").click();
   
    cy.wait(5000);
    // Verify the URL after signup
    cy.url().should("eq", "http://localhost:5173/signup");
  });


  it("Should display error message enter valid address", () => {
 
    cy.get('[name="name"]').type("Juan Carlos");
    cy.get('[name="lastName"]').type("Mateo Santos");
    cy.get('[name="email"]').type("juancarlosmateo@gmail.com");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get('[name="confirmPassword"]').type("Campanita2020@");
    cy.get('[name="phone"]').type("8294744948");
    cy.get('[name="streetAddress"]').type("2");
    cy.get('[name="city"]').type("V");
    cy.get('[name="state"]').type("S");
    cy.get('[name="zipCode"]').type("000");
    cy.get("#CheckBox").check();
    cy.get("#Submit").click();
   
    cy.wait(5000);
    // Verify the URL after signup
    cy.url().should("eq", "http://localhost:5173/signup");
  });

  it("Should display error message please enter a valid email", () => {
 
    cy.get('[name="name"]').type("Juan Carlos");
    cy.get('[name="lastName"]').type("Mateo Santos");
    cy.get('[name="email"]').type("juancarlosmateo@gm");
    cy.get('[name="password"]').type("Campanita2020@");
    cy.get('[name="confirmPassword"]').type("Campanita2020@");
    cy.get('[name="phone"]').type("8294744948");
    cy.get('[name="streetAddress"]').type("Sagradio Dias #6");
    cy.get('[name="city"]').type("Villa Altagracia");
    cy.get('[name="state"]').type("San Cristobal");
    cy.get('[name="zipCode"]').type("91000");
    cy.get("#CheckBox").check();
    cy.get("#Submit").click();
   
    cy.wait(5000);
    // Verify the URL after signup
    cy.url().should("eq", "http://localhost:5173/signup");
  });


});
