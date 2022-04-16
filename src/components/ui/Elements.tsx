import styled from 'styled-components/macro';
import {css} from 'styled-components';
import {TransparentButton} from './Buttons';
import {COLORS, flex, TRANSITIONS} from '../../constants/style';
import {FilterButtonProps} from '../../ts/interfaces';
import {useState} from 'react';

export const SmallText = styled.p<{color?: string}>`
  font-size: 12px;
  line-height: 16px;

  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const BlueButton = styled(TransparentButton)<{isActive?: boolean}>`
  padding-bottom: 6px;
  background: transparent !important;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: transparent;
    transition: all ${TRANSITIONS.basic};
  }

  ${({isActive}) =>
    isActive &&
    css`
      color: ${COLORS.blue};
      position: relative;

      &:after {
        background: ${COLORS.blue};
      }
    `}
`;

export const FilterButton = (props: FilterButtonProps) => {
  const {children, isActive} = props;
  const [isHovering, setIsHovering] = useState(false);
  return (
    <BlueButton
      {...props}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isActive={isActive || isHovering}
    >
      {children}
    </BlueButton>
  );
};

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
  width: 20px;
  height: 20px;
  padding: 0;
  appearance: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0s;
  border: 1px solid ${COLORS.neutralGrey};

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${flex.center}
    background: url('/assets/icons/checkbox-arrow.svg') no-repeat center, ${COLORS.blue};
    opacity: 0;
  }

  &:checked {
    border-width: 0;
    &:after {
      opacity: 1;
    }
  }
`;
