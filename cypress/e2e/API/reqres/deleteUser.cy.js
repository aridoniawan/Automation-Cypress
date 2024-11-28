/// <reference types="cypress" />

describe("Delete User", () => {
  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
