import React from 'react';
import styled from 'styled-components/macro';
import {PrimaryButton} from '../ui/Buttons';
import {flex} from '../../constants/style';
import {Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../app/tasksReducer';
import {AuthorReducerType, SectionType} from '../../ts/types';
import {changeSectionFilter} from '../../app/sectionsReducer';
import {SectionFilterEnum} from '../../ts/enums';
import {useTranslation} from 'react-i18next';

interface Props {
  section: SectionType;
}

const AddTask = ({section}: Props) => {
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const {authorName} = useSelector((state: AuthorReducerType) => state.author);

  const addTaskHandler = (text: string, actions: FormikHelpers<{text: string}>) => {
    if (text.length > 0) {
      dispatch(
        addTask({
          sectionId: section.id,
          title: text,
          description: '',
          priority: 'none',
          author: authorName,
        })
      );
      if (section.activeFilter === SectionFilterEnum.Done) {
        dispatch(changeSectionFilter({sectionId: section.id, newFilter: SectionFilterEnum.All}));
      }
      actions.setFieldValue('text', '');
    }
  };
  return (
    <Formik
      initialValues={{text: ''}}
      onSubmit={(values, actions) => addTaskHandler(values.text, actions)}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Container>
            <input
              type="text"
              name="text"
              value={props.values.text}
              onChange={props.handleChange}
              placeholder="Add new task"
              data-test-id="add-task-input"
              autoFocus
            />
            <PrimaryButton
              disabled={props.values.text.length === 0}
              type="submit"
              data-test-id="add-task-submit"
            >
              {t('task.add')}
            </PrimaryButton>
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default AddTask;

const Container = styled.div`
  ${flex.between}
  width: 100%;
  padding-top: 0.5rem;

  button {
    margin-left: 0.5rem;
  }
`;
