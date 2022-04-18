import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {TaskProps} from '../../ts/interfaces';
import {COLORS, flex, FONT_WEIGHTS, TRANSITIONS} from '../../constants/style';
import {Checkbox} from '../ui/Elements';
import {useDispatch} from 'react-redux';
import {toggleTask} from '../../app/tasksReducer';
import {TransparentButton} from '../ui/Buttons';
import {useTranslation} from 'react-i18next';
import TaskDropdown from './TaskDropdown';
import {getPriorityColor} from '../../utils';

const Task = ({task}: TaskProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  return (
    <TaskContainer labelColor={getPriorityColor(task)}>
      <Checkbox
        onChange={() => dispatch(toggleTask(task.id))}
        checked={task.completed}
        data-test-id="task-checkbox"
      />
      <Title onClick={() => setTaskOpen(!taskOpen)}>{task.title}</Title>
      <TransparentButton
        isActive={modalVisible}
        onClick={() => setModalVisible(!modalVisible)}
        data-test-id="open-task-dropdown"
      >
        <img src="/assets/icons/three-dots-icon.svg" alt={t('section.more')} />
      </TransparentButton>
      {taskOpen && task.description && <TaskDescription>{task.description}</TaskDescription>}
      <TaskDropdown
        isActive={modalVisible}
        closeAction={() => setModalVisible(false)}
        task={task}
      />
    </TaskContainer>
  );
};

export default Task;

const TaskContainer = styled.div<{labelColor: string}>`
  border: 1px solid ${COLORS.separator};
  padding: 13px 16px 13px 11px;
  position: relative;
  border-radius: 4px;
  ${flex.start}
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  &:before {
    position: absolute;
    content: '';
    top: -1px;
    bottom: -1px;
    left: -1px;
    width: 3px;
    border-right: 1px solid transparent;
    transition: background ${TRANSITIONS.basic};
    background: ${({labelColor}) => labelColor};
    border-radius: 4px 0 0 4px;
  }
`;

const Title = styled.h5`
  margin: 0 auto 0 0.5rem;
  font-weight: ${FONT_WEIGHTS.normal};
  flex: 1;
  cursor: pointer;
`;

const TaskDescription = styled.h5`
  width: 100%;
  flex-shrink: 0;
  color: ${COLORS.neutralGrey};
  margin-top: 1rem;
  font-weight: ${FONT_WEIGHTS.normal};
  white-space: pre-wrap;
`;
