import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import AddTask from './AddTask';
import {SectionFilterEnum} from '../../ts/enums';
import {store} from '../../app/store';

describe('empty dashboard', () => {
  test('on initial render, autofocus on add section input', () => {
    render(
      <Provider store={store}>
        <AddTask section={{id: 1, activeFilter: SectionFilterEnum.All, title: 'Section 1'}} />
      </Provider>
    );
    expect(screen.getByText('task.add')).toBeDisabled();
  });
});
