import styled from 'styled-components/macro';
import {COLORS, FONT_WEIGHTS, TRANSITIONS} from '../../constants/style';
import {css} from 'styled-components';
import {FilterButtonProps} from '../../ts/interfaces';
import {useState} from 'react';

export const NavButton = styled.button`
  width: 32px;
  height: 32px;
  background: ${COLORS.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${COLORS.darkGrey};
  }
`;

export const BasicButton = styled.button`
  padding: 6px 12px;
`;

export const PrimaryButton = styled(BasicButton)<{disabled?: boolean}>`
  background: ${COLORS.blue};
  color: ${COLORS.white};

  ${({disabled}) =>
    disabled
      ? css`
          opacity: 0.4;
        `
      : css`
          &:hover {
            background: #003d99;
          }
        `}
`;

export const SecondaryButton = styled(BasicButton)`
  background: ${COLORS.lightGrey};
  color: ${COLORS.black};

  &:hover {
    background: ${COLORS.darkGrey};
  }
`;

export const TransparentButton = styled.button<{isActive?: boolean}>`
  background: transparent;
  padding: 0;
  font-weight: ${FONT_WEIGHTS.medium};
  position: relative;

  &:hover {
    background: ${COLORS.lightGrey};
  }

  ${({isActive}) =>
    isActive &&
    css`
      background: ${COLORS.lightGrey};
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
