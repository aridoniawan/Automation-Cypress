/// <reference types="cypress" />
import loginPage from "../../../pom/login/login.cy";

describe("Login", () => {
  it("Login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    // cy.intercept(
    //   "GET",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    // ).as("actionSummary");
    cy.intercept("GET", "**/action-summary").as("actionSummary");
    loginPage.loginButton().click();
    cy.wait("@actionSummary");
    loginPage.verifyDashboard().should("have.text", "Dashboard");
  });
});
