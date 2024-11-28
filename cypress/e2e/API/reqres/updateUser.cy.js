/// <reference types="cypress" />

describe("Update User", () => {
  it("Update User", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Awan",
        job: "Web DEV",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Awan");
      expect(response.body.job).to.equal("Web DEV");
    });
  });
});
