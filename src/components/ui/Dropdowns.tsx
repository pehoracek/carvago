import React from 'react';
import styled from 'styled-components/macro';
import {COLORS, flex, FONT_WEIGHTS, RADIUSES, TRANSITIONS, Z_INDEXES} from '../../constants/style';
import {TransparentButton} from './Buttons';
import {DropdownItemProps, DropdownProps} from '../../ts/interfaces';
import {useTranslation} from 'react-i18next';
import {DropdownItemType} from '../../ts/types';
import {css} from 'styled-components';

export const DropdownItem = ({
  label,
  dropdownItemType,
  onClick,
  color,
  arrow,
  type,
}: DropdownItemProps) => {
  const {t} = useTranslation();

  const getIcon = () => {
    switch (dropdownItemType) {
      case 'delete':
        return '/assets/icons/delete-icon.svg';
      case 'edit':
        return '/assets/icons/edit-icon.svg';
      case 'check':
        return '/assets/icons/check-icon.svg';
      case 'calendar':
        return '/assets/icons/calendar-icon.svg';
      case 'clearAll':
        return '/assets/icons/clear-all-icon.svg';
      default:
        return '/assets/icons/check-icon.svg';
    }
  };

  return (
    <Item
      dropdownItemType={dropdownItemType}
      onClick={onClick}
      dotColor={color}
      arrow={arrow}
      type={type}
    >
      <Dot />
      <img src={getIcon()} alt={t('icon')} />
      <h5>{label}</h5>
    </Item>
  );
};

const Dot = styled.div`
  display: none;
`;

const Item = styled(TransparentButton)<{
  dropdownItemType: DropdownItemType;
  dotColor?: string;
  arrow?: boolean;
}>`
  width: 200px;
  height: 36px;
  background: ${COLORS.white};
  ${flex.start}

  h5 {
    font-weight: ${FONT_WEIGHTS.normal};
  }

  ${({dropdownItemType}) =>
    dropdownItemType === 'delete' &&
    css`
      h5 {
        color: ${COLORS.danger};
      }
    `}

  ${({dotColor, arrow}) =>
    dotColor &&
    css`
      width: 100% !important;

      ${arrow
        ? css`
            background-image: url('/assets/icons/arrow-down-icon.svg') !important;
            background-repeat: no-repeat !important;
            background-position: calc(100% - 8px) !important;
          `
        : ``}

      ${Dot} {
        display: block;
        width: 16px;
        height: 16px;
        margin-left: 8px;
        margin-right: 12px;
        border-radius: 20px;
        background: ${dotColor};
      }

      img {
        display: none;
      }
    `}

  img {
    margin-left: 8px;
    margin-right: 12px;
  }
`;

export const Dropdown = ({children, top, right, isActive}: DropdownProps) => (
  <DropdownContainer top={top} right={right} isActive={isActive}>
    {children}
  </DropdownContainer>
);

const DropdownContainer = styled.div<{top?: number; right?: number; isActive?: boolean}>`
  padding: 0.5rem;
  border-radius: ${RADIUSES.medium};
  background: ${COLORS.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid ${COLORS.separator};
  position: absolute;
  top: ${({top}) => (top ? top : 28)}px;
  right: ${({right}) => (right ? right : 0)}px;
  z-index: -1;
  opacity: 0;
  transition: opacity ${TRANSITIONS.basic}, z-index 0s ${TRANSITIONS.basic};

  ${({isActive}) =>
    isActive &&
    css`
      z-index: ${Z_INDEXES.dropdown};
      opacity: 1;
      transition: opacity ${TRANSITIONS.basic}, z-index 0s 0s;
    `}
`;
