import React from 'react';
import {useTranslation} from 'react-i18next';
import {IndividualDropdownProps} from '../../ts/interfaces';
import {Dropdown, DropdownItem} from '../ui/Dropdowns';
import {useDispatch} from 'react-redux';
import {SectionFilterEnum} from '../../ts/enums';
import {changeGlobalSectionFilter} from '../../app/sectionsReducer';

const NavigationDropdownFilter = ({isActive, closeAction}: IndividualDropdownProps) => {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const changeFilter = (filterType: SectionFilterEnum) => {
    dispatch(changeGlobalSectionFilter(filterType));
  };

  return (
    <Dropdown isActive={isActive} top={36} right={40}>
      <DropdownItem
        label={t('task.show_all')}
        dropdownItemType="clearAll"
        onClick={() => {
          changeFilter(SectionFilterEnum.All);
          closeAction();
        }}
      />
      <DropdownItem
        label={t('task.view_completed')}
        dropdownItemType="check"
        onClick={() => {
          changeFilter(SectionFilterEnum.Done);
          closeAction();
        }}
      />
      <DropdownItem
        label={t('task.view_todo')}
        dropdownItemType="calendar"
        onClick={() => {
          changeFilter(SectionFilterEnum.ToDo);
          closeAction();
        }}
      />
    </Dropdown>
  );
};

export default NavigationDropdownFilter;
