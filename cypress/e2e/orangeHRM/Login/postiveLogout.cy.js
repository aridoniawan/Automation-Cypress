/// <reference types="cypress" />
import loginPage from "../../../pom/login/login.cy";

describe("Login", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginPage.verifyLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    loginPage.loginButton().click();
    cy.wait("@actionSummary");
    loginPage.verifyDashboard().should("have.text", "Dashboard");

    cy.get("span.oxd-userdropdown-tab").click();
    loginPage.verifyLogout().click();
    cy.url({ timeout: 5000 }).should("include", "/web/index.php/auth/login");
  });
});
