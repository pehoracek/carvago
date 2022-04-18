import {cleanup, render, screen} from '@testing-library/react';
import Empty from './Empty';
import {Provider} from 'react-redux';
import {store} from '../../app/store';

afterEach(() => {
  cleanup();
});

describe('empty dashboard', () => {
  test('on initial render, autofocus on add section input', () => {
    render(
      <Provider store={store}>
        <Empty />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Add new section')).toHaveFocus();
  });

  test('on initial render, add section button is disabled', () => {
    render(
      <Provider store={store}>
        <Empty />
      </Provider>
    );
    expect(screen.getByText(/buttons.save/i)).toBeDisabled();
  });
});
