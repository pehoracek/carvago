import React from 'react';
import {useTranslation} from 'react-i18next';
import {IndividualDropdownProps} from '../../ts/interfaces';
import {Dropdown, DropdownItem} from '../ui/Dropdowns';
import {useDispatch} from 'react-redux';
import {deleteTask, setEditTask} from '../../app/tasksReducer';
import {TaskType} from '../../ts/types';

interface Props extends IndividualDropdownProps {
  task: TaskType;
}

const TaskDropdown = ({isActive, closeAction, task}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  return (
    <Dropdown isActive={isActive} top={41} right={16}>
      <DropdownItem
        label={t('task.edit')}
        dropdownItemType="edit"
        onClick={() => {
          dispatch(setEditTask(task));
          closeAction();
        }}
        data-test-id="edit-task"
      />
      <DropdownItem
        label={t('task.delete')}
        dropdownItemType="delete"
        onClick={() => {
          dispatch(deleteTask(task.id));
          closeAction();
        }}
        data-test-id="delete-task"
      />
    </Dropdown>
  );
};

export default TaskDropdown;
