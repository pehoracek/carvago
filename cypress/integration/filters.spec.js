describe('change filters', () => {
  it('filters changed', () => {
    // open filters dropdown
    cy.get('[data-test-id="global-filters-button"]').click();
    // select filter
    cy.get('[data-test-id="navigation-dropdown-filters"] button:last-child').click();
  });
});
