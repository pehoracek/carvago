describe('edit task', () => {
  it('task edited', () => {
    // open task dropdown
    cy.get('[data-test-id="open-task-dropdown"]').click();
    // open action dropdown
    cy.get('[data-test-id="edit-task"]').click();
    // change task title
    cy.get('[data-test-id="edit-task-modal-form"]')
      .find('input[name="title"]')
      .clear()
      .type('Completely new title');
    // change task description
    cy.get('[data-test-id="edit-task-modal-form"]')
      .find('textarea[name="description"]')
      .type('Urgent task');
    // open priority dropdown
    cy.get('[data-test-id="select-priority"]').click();
    // select priority
    cy.get('[data-test-id="priority-dropdown"]').find('button:first-child').click();
    // save changes
    cy.get('[data-test-id="edit-task-modal-form"]').find('button[type="submit"]').click();
  });
});
