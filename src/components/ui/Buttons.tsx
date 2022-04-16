import styled from 'styled-components/macro';
import {COLORS, FONT_WEIGHTS} from '../../constants/style';
import {css} from 'styled-components';

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

export const PrimaryButton = styled(BasicButton)<{isDisabled?: boolean}>`
  background: ${COLORS.blue};
  color: ${COLORS.white};

  ${({isDisabled}) =>
    isDisabled
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
