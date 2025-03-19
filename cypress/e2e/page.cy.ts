describe("template spec", () => {
  it("should search for 5 results", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-test=search_input]").type(
      `Como programar testes no frontend usando Cypress`
    );

    // TODO: Insert fixture with 5 results
    // cy.fixture()

    cy.get("[data-test=search_button]").click();

    // TODO: Wait for result to end

    cy.get("[data-test=search_result_0]").should("exist");
  });

  // TODO: To implement
  it("should search for no results", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-test=search_input]").type(
      `Como programar testes no frontend usando Cypress`
    );

    // TODO: Insert fixture with no results
    // cy.fixture()

    cy.get("[data-test=search_button]").click();

    // TODO: Wait for result to end

    cy.get("[data-test=search_result_0]").should("not.exist");
  });
});
