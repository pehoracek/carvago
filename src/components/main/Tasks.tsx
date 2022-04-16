import React from 'react';
import styled from 'styled-components/macro';
import Empty from '../tasks/Empty';
import {useDispatch, useSelector} from 'react-redux';
import {SectionsReducerType, TasksReducerType} from '../../ts/types';
import Section from '../sections/Section';
import {flex, NUM_BREAKPOINTS} from '../../constants/style';
import {SecondaryButton} from '../ui/Buttons';
import {useTranslation} from 'react-i18next';
import {addSection} from '../../app/sectionsReducer';
import {breakpoint} from '../../utils/style';
import EditTaskModal from '../modals/EditTaskModal';

const Tasks = () => {
  const {allSections} = useSelector((state: SectionsReducerType) => state.sections);
  const {editingTask} = useSelector((state: TasksReducerType) => state.tasks);

  const {t} = useTranslation();

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {allSections.length === 0 ? (
        <Empty />
      ) : (
        <>
          {allSections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
          <NewSectionButton
            onClick={() => dispatch(addSection({title: `Section title ${allSections.length + 1}`}))}
          >
            + {t('section.add')}
          </NewSectionButton>
        </>
      )}
      {editingTask && <EditTaskModal />}
    </Wrapper>
  );
};

export default Tasks;

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  ${flex.start}
  align-items: flex-start;
`;

const NewSectionButton = styled(SecondaryButton)`
  width: 100%;

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    width: 344px;
  }
`;
