describe('new section', () => {
  it('new section created', () => {
    cy.visit('/');
    // write section title
    cy.get('[data-test-id="empty-new-section-input"]').type('New testing section');
    // submit section
    cy.get('[data-test-id="empty-new-section-submit"]').click();
  });
});
