import React from 'react';
import {useTranslation} from 'react-i18next';
import {IndividualDropdownProps} from '../../ts/interfaces';
import {Dropdown, DropdownItem} from '../ui/Dropdowns';
import {useDispatch} from 'react-redux';
import {deleteAllTasks, deleteCompletedTasks} from '../../app/tasksReducer';

const NavigationDropdownSettings = ({isActive, closeAction}: IndividualDropdownProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <Dropdown isActive={isActive} top={36} right={0}>
      <DropdownItem
        label={t('task.clear_all')}
        dropdownItemType="clearAll"
        onClick={() => {
          dispatch(deleteAllTasks());
          closeAction();
        }}
      />
      <DropdownItem
        label={t('task.clear_all_done')}
        dropdownItemType="check"
        onClick={() => {
          dispatch(deleteCompletedTasks());
          closeAction();
        }}
      />
    </Dropdown>
  );
};

export default NavigationDropdownSettings;
