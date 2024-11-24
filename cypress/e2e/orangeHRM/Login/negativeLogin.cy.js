/// <reference types="cypress" />

describe("Login", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin21");
    cy.get(
      "button[type='submit'].oxd-button.oxd-button--main.orangehrm-login-button"
    ).click();
    cy.get(".oxd-alert-content--error")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });
});
