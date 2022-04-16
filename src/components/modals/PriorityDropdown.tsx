import React from 'react';
import {Dropdown, DropdownItem} from '../ui/Dropdowns';
import {useTranslation} from 'react-i18next';
import {IndividualDropdownProps} from '../../ts/interfaces';
import {COLORS} from '../../constants/style';
import {PriorityType} from '../../ts/types';

interface Props extends IndividualDropdownProps {
  formikProps: any;
}

const PriorityDropdown = ({isActive, formikProps, closeAction}: Props) => {
  const {t} = useTranslation();

  const changePriority = (priority: PriorityType) => {
    formikProps.setFieldValue('priority', priority);
    closeAction();
  };

  return (
    <Dropdown isActive={isActive} top={40}>
      <DropdownItem
        label={t('priority.high')}
        dropdownItemType="color"
        color={COLORS.danger}
        onClick={() => changePriority('high')}
        type="button"
      />
      <DropdownItem
        label={t('priority.medium')}
        dropdownItemType="color"
        color={COLORS.warning}
        onClick={() => changePriority('medium')}
        type="button"
      />
      <DropdownItem
        label={t('priority.low')}
        dropdownItemType="color"
        color={COLORS.success}
        onClick={() => changePriority('low')}
        type="button"
      />
    </Dropdown>
  );
};

export default PriorityDropdown;