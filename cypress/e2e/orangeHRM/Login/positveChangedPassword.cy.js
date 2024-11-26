/// <reference types="cypress" />

describe("Login", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("h5").contains("Login").should("have.text", "Login");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary");
    cy.get("h6").contains("Dashboard").should("have.text", "Dashboard");
    cy.get("span.oxd-userdropdown-tab").click();
    cy.get("a[href='/web/index.php/pim/updatePassword']").click();
    cy.url({ timeout: 5000 }).should(
      "include",
      "/web/index.php/pim/updatePassword"
    );

    cy.get(".oxd-form-row")
      .first()
      .find(".oxd-grid-item")
      .last()
      .find('input[type="password"]')
      .type("admin123");

    // Password - berada dalam element dengan class user-password-row dan user-password-cell
    cy.get(".user-password-row")
      .find(".user-password-cell")
      .find('input[type="password"]')
      .type("Test123");

    // Confirm Password - berada dalam user-password-row tapi di grid item terakhir
    cy.get(".user-password-row")
      .find(".oxd-grid-item")
      .last()
      .find('input[type="password"]')
      .type("Test123");
    cy.intercept("PUT", "**/update-password").as("updatePassword");
    cy.get("button[type='submit'].orangehrm-left-space").click();
    cy.wait("@updatePassword");
  });
});
