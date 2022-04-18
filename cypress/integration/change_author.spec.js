describe('change author', () => {
  it('new author', () => {
    // edit author
    cy.get('[data-test-id="edit-author"]').click();
    // type new name
    cy.get('[data-test-id="edit-author-form"] input[name="authorName"]').clear().type('Bill Gates');
    // save author
    cy.get('[data-test-id="edit-author-form"] button[type="submit"]').click();
  });
});
