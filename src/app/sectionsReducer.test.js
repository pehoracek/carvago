import {addSection} from './sectionsReducer';
import {store} from './store';
import {SectionFilterEnum} from '../ts/enums';

describe('sections reducer', () => {
  test('add section', () => {
    let state = store.getState().sections;
    expect(state.allSections.length).toBe(0);

    store.dispatch(addSection({title: 'New section'}));
    state = store.getState().sections;
    const newSection = state.allSections.find((section) => section.title === 'New section');
    expect(newSection.activeFilter).toBe(SectionFilterEnum.All);
    expect(newSection.id).toBe(1);
  });
});
