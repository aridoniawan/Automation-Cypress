/// <reference types="cypress" />

describe("Create User", () => {
  it("Create User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "Ari",
        job: "QA Engginer",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.name).to.equal("Ari");
      expect(response.body.job).to.equal("QA Engginer");
    });
  });
});
