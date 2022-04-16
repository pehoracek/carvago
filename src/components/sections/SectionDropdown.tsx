import React from 'react';
import {Dropdown, DropdownItem} from '../ui/Dropdowns';
import {useTranslation} from 'react-i18next';
import {IndividualDropdownProps} from '../../ts/interfaces';
import {useDispatch} from 'react-redux';
import {markAllDone} from '../../app/tasksReducer';
import {deleteSection} from '../../app/sectionsReducer';

interface Props extends IndividualDropdownProps {
  sectionId: number;
  onEdit: () => void;
}

const SectionDropdown = ({isActive, closeAction, sectionId, onEdit}: Props) => {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  return (
    <Dropdown isActive={isActive}>
      <DropdownItem
        label={t('section.mark_all')}
        dropdownItemType="check"
        onClick={() => {
          dispatch(markAllDone({sectionId}));
          closeAction();
        }}
      />
      <DropdownItem
        label={t('section.edit')}
        dropdownItemType="edit"
        onClick={() => {
          onEdit();
          closeAction();
        }}
      />
      <DropdownItem
        label={t('section.delete')}
        dropdownItemType="delete"
        onClick={() => {
          dispatch(deleteSection({sectionId}));
          closeAction();
        }}
      />
    </Dropdown>
  );
};

export default SectionDropdown;
