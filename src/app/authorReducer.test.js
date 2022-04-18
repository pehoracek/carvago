import {store} from './store';
import {changeAuthorName} from './authorReducer';

describe('author reducer', () => {
  test('change author name', () => {
    let authorName = store.getState().author.authorName;
    expect(authorName).toBe('Petr Horáček');

    store.dispatch(changeAuthorName('John Travolta'));
    authorName = store.getState().author.authorName;

    expect(authorName).toBe('John Travolta');
  });
});
