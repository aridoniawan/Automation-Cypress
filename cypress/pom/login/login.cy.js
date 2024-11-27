export default class loginPage {
  static verifyLogin() {
    return cy.get("h5").contains("Login");
  }
  static inputUsername() {
    return cy.get("input[name='username']");
  }
  static inputPassword() {
    return cy.get("input[name='password']");
  }
  static loginButton() {
    return cy.get('button[type="submit"]');
  }
  static verifyDashboard() {
    return cy.get("h6").contains("Dashboard");
  }

  static verifyLogout() {
    return cy.get("a[href='/web/index.php/auth/logout']");
  }
}
