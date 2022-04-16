import React from 'react';
import styled from 'styled-components/macro';
import {PrimaryButton} from '../ui/Buttons';
import {flex} from '../../constants/style';
import {Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../app/tasksReducer';
import {AuthorReducerType} from '../../ts/types';

interface Props {
  sectionId: number;
}

const AddTask = ({sectionId}: Props) => {
  const dispatch = useDispatch();

  const {authorName} = useSelector((state: AuthorReducerType) => state.author);

  const addTaskHandler = (text: string, actions: FormikHelpers<{text: string}>) => {
    if (text.length > 0) {
      dispatch(
        addTask({sectionId, title: text, description: '', priority: 'low', author: authorName})
      );
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
            />
            <PrimaryButton isDisabled={props.values.text.length === 0} type="submit">
              Add
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
