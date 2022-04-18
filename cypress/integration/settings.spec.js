describe('change settings', () => {
  it('tasks cleared', () => {
    // open settings dropdown
    cy.get('[data-test-id="global-settings-button"]').click();
    // clear tasks
    cy.get('[data-test-id="navigation-dropdown-settings"] button:first-child').click();
  });
});
