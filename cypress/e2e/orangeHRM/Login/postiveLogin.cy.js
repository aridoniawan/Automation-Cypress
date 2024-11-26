/// <reference types="cypress" />

describe("Login", () => {
  it("Login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("h5").contains("Login").should("have.text", "Login");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    // cy.intercept(
    //   "GET",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    // ).as("actionSummary");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary");
    cy.get("h6").contains("Dashboard").should("have.text", "Dashboard");
  });
});
