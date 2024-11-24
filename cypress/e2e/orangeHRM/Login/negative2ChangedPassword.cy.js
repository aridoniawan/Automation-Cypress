/// <reference types="cypress" />

describe("Login", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.get(
      "button[type='submit'].oxd-button.oxd-button--main.orangehrm-login-button"
    ).click();
    cy.url({ timeout: 5000 }).should(
      "include",
      "/web/index.php/dashboard/index"
    );
    cy.get("span.oxd-userdropdown-tab", { timeout: 5000 }).click();
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
      .type("admin333");

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

    cy.get("button[type='submit'].orangehrm-left-space").click();
  });
});
