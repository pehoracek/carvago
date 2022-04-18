import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components/macro';
import {
  COLORS,
  flex,
  FONT_WEIGHTS,
  NUM_BREAKPOINTS,
  RADIUSES,
  TRANSITIONS,
  Z_INDEXES,
} from '../../constants/style';
import {PrimaryButton, SecondaryButton, TransparentButton} from '../ui/Buttons';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {PriorityType, TasksReducerType} from '../../ts/types';
import moment from 'moment';
import {breakpoint} from '../../utils/style';
import {SmallText} from '../ui/Elements';
import {DropdownItem} from '../ui/Dropdowns';
import {getPriorityColor, getPriorityLabel} from '../../utils';
import PriorityDropdown from './PriorityDropdown';
import {css} from 'styled-components';
import {Formik} from 'formik';
import {editTask, setEditTask} from '../../app/tasksReducer';

const EditTaskModal = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {t} = useTranslation();

  const {editingTask} = useSelector((state: TasksReducerType) => state.tasks);

  const dispatch = useDispatch();

  const submitHandler = (values: {title: string; description: string; priority: PriorityType}) => {
    const {title, description, priority} = values;
    if (editingTask) {
      dispatch(editTask({...editingTask, title, description, priority}));
      dispatch(setEditTask(null));
    }
  };

  return (
    <Modal>
      {editingTask && (
        <Content showDropdown={showDropdown}>
          <Container>
            <Heading>
              <h4>{t('modal.heading')}</h4>
              <TransparentButton onClick={() => dispatch(setEditTask(null))}>
                <img src="/assets/icons/close-icon.svg" alt={t('icon')} />
              </TransparentButton>
            </Heading>
          </Container>
          <Container>
            <Info>
              <h5>
                {t('modal.created_by')} {editingTask.author}
              </h5>
              <h5>
                {t('modal.created_date')} {moment(editingTask.createdAt).format('DD/MM/YYYY')}
              </h5>
              <h5>{moment(editingTask.createdAt).format('hh:mm')}</h5>
            </Info>
            <Formik
              initialValues={{
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
              }}
              onSubmit={(values) => submitHandler(values)}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} data-test-id="edit-task-modal-form">
                  <InputContainer>
                    <SmallText color={COLORS.neutralGrey}>{t('modal.task_name')}</SmallText>
                    <input
                      type="text"
                      name="title"
                      value={props.values.title}
                      onChange={props.handleChange}
                    />
                    <textarea
                      placeholder="Write a detailed description of the task"
                      name="description"
                      value={props.values.description}
                      onChange={props.handleChange}
                    />
                  </InputContainer>
                  <Priority>
                    <DropdownItem
                      label={t(getPriorityLabel(props.values))}
                      dropdownItemType="color"
                      color={getPriorityColor(props.values)}
                      onClick={() => setShowDropdown(!showDropdown)}
                      type="button"
                      arrow
                      data-test-id="select-priority"
                    />
                    <PriorityDropdown
                      isActive={showDropdown}
                      formikProps={props}
                      closeAction={() => setShowDropdown(false)}
                    />
                  </Priority>
                  <Buttons>
                    <SecondaryButton type="button" onClick={() => dispatch(setEditTask(null))}>
                      {t('buttons.cancel')}
                    </SecondaryButton>
                    <PrimaryButton type="submit">{t('buttons.save')}</PrimaryButton>
                  </Buttons>
                </form>
              )}
            </Formik>
          </Container>
        </Content>
      )}
    </Modal>
  );
};

export default EditTaskModal;

const revealModal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_INDEXES.editTaskModal};
  background: rgba(9, 30, 66, 0.4);
  overflow: auto;
  animation ${revealModal} ${TRANSITIONS.basic};
`;

const Content = styled.div<{showDropdown: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.white};
  overflow: auto;

  ${({showDropdown}) =>
    showDropdown &&
    css`
      padding-bottom: 80px;
    `}

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    border-radius: ${RADIUSES.medium};
    width: 580px;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    min-height: 355px;

    ${({showDropdown}) =>
      showDropdown &&
      css`
        min-height: 510px;
      `}

    @media screen and (min-height: 500px) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;

  &:first-child {
    border-bottom: 1px solid ${COLORS.separator};
  }
`;

const Heading = styled.div`
  ${flex.between}
`;

const Info = styled.div`
  * {
    font-weight: ${FONT_WEIGHTS.normal};
    color: ${COLORS.neutralGrey};
  }

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    ${flex.start}

    * {
      &:not(:first-child) {
        padding-left: 21px;
        position: relative;

        &:before {
          position: absolute;
          content: '';
          left: 8px;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 10px;
          transform: translateY(-50%);
          background: ${COLORS.neutralGrey};
        }
      }
    }
  }
`;

const InputContainer = styled.div`
  margin-top: 1rem;
  input {
    margin-top: 4px;
    margin-bottom: 1rem;
  }
`;

const Priority = styled.div`
  position: relative;
  width: 266px !important;
  > * {
    width: 100%;
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
  ${flex.end}

  button:first-child {
    margin-right: 0.5rem;
  }
`;
