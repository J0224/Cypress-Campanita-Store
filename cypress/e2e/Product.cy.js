describe("Products By Category Process", () => {
  beforeEach(() => {
    console.log("Loading Products Process");
    cy.visit("http://localhost:5173/");
  });

  it("Find number of products, if length is 105 will success", () => {
    cy.visit("http://localhost:5173/");
    cy.xpath("//ul[@class='product-list-ul']/li").should("have.length", 105);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Find number of products, if length is more than 105 will fail", () => {
    cy.visit("http://localhost:5173/");
    cy.xpath("//ul[@class='product-list-ul']/li").should("have.length", 120);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("It should display product by category pants", () => {
    // Open the dropdown
    cy.get(".span-menu").click();

    // Wait for the dropdown to appear
    cy.get(".dropdown").should("be.visible");

    // Click on the 'pants' category
    cy.contains(".dropdown ul li", "pants").click();

    // Wait for the URL to include the category name
    cy.url({ timeout: 10000 }).should("include", "/by-category/pants").then((url) => {
      // Log the URL for debugging
      cy.log(`URL after clicking on 'pants': ${url}`);
    });

    // Wait for the products to load
    cy.get(".product-list-div-by-category").should("exist");
    cy.get(".product-list-ul-by-category li").should("have.length.greaterThan", 0);

    // You can add more assertions based on your UI
  });
});
