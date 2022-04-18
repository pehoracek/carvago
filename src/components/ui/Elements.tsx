import styled from 'styled-components/macro';
import {css} from 'styled-components';
import {COLORS, flex} from '../../constants/style';

export const SmallText = styled.p<{color?: string}>`
  font-size: 12px;
  line-height: 16px;

  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
`;

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
