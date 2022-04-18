describe('new task', () => {
  it('new task created', () => {
    // write task title
    cy.get('[data-test-id="add-task-input"]').type('New testing task 1');
    // submit task
    cy.get('[data-test-id="add-task-submit"]').click();
  });
});
