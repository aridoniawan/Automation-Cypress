/// <reference types="cypress" />

describe("Login", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("h5").contains("Login").should("have.text", "Login");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary");
    cy.get("h6").contains("Dashboard").should("have.text", "Dashboard");

    cy.get("span.oxd-userdropdown-tab").click();
    cy.get("a[href='/web/index.php/auth/logout']").click();
    cy.url({ timeout: 5000 }).should("include", "/web/index.php/auth/login");
  });
});
