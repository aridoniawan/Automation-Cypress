/// <reference types="cypress" />

describe("Single User", () => {
  it("Single User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.id).to.equal(2);
      expect(response.body.data.first_name).to.equal("Janet");
      expect(response.body.data.last_name).to.equal("Weaver");
      expect(response.body.data.avatar).to.equal(
        "https://reqres.in/img/faces/2-image.jpg"
      );
    });
  });
});
