import {store} from './store';
import {addTask} from './tasksReducer';

describe('tasks reducer', () => {
  test('add task', () => {
    let state = store.getState().tasks;
    expect(state.allTasks.length).toBe(0);

    const taskProps = {
      title: 'New task 1',
      author: 'Me',
      sectionId: 1,
      description: 'Description of task',
    };
    store.dispatch(addTask(taskProps));
    state = store.getState().tasks;
    const newTask = state.allTasks.find((task) => task.title === 'New task 1');
    expect(newTask.completed).toBe(false);
  });
});
