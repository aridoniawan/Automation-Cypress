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
    cy.get("a[href='/web/index.php/auth/logout']").click();
    cy.url({ timeout: 5000 }).should("include", "/web/index.php/auth/login");
  });
});
