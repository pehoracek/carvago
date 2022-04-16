import {css} from 'styled-components';

export const NUM_BREAKPOINTS = {
  min: 320,
  mobileM: 375,
  mobileL: 500,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1200,
  desktopL: 1440,
  desktopXL: 2560,
  max: 1440,
};

export const BREAKPOINTS = {
  min: `${NUM_BREAKPOINTS.min}px`,
  mobileM: `${NUM_BREAKPOINTS.mobileM}px`,
  mobileL: `${NUM_BREAKPOINTS.mobileL}px`,
  tablet: `${NUM_BREAKPOINTS.tablet}px`,
  desktopS: `${NUM_BREAKPOINTS.desktopS}px`,
  desktopM: `${NUM_BREAKPOINTS.desktopM}px`,
  desktopL: `${NUM_BREAKPOINTS.desktopL}px`,
  desktopXL: `${NUM_BREAKPOINTS.desktopXL}px`,
  max: `${NUM_BREAKPOINTS.max}px`,
};

export const COLORS = {
  bg: '#F4F5F7',
  black: '#091E42',
  white: '#fff',
  separator: '#DFE1E6',
  lightGrey: '#EBECF0',
  darkGrey: '#B3BAC5',
  neutralGrey: '#6B778C',
  success: '#24A148',
  danger: '#E32C1E',
  blue: '#0065FF',
  warning: '#FF9800',
};

export const FONT_WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const FONT_SIZES = {
  h1: '72px',
  h2: '36px',
  h3: '24px',
  h4: '16px',
  h5: '14px',
  p: '16px',
  button: '14px',
  small: '14px',
  input: '14px',
};

export const LINE_HEIGHTS = {
  h1: '96px',
  h2: '45px',
  h3: '30px',
  h4: '24px',
  h5: '20px',
  p: '26px',
  button: '20px',
  small: '25px',
  input: '20px',
};

export const TRANSITIONS = {
  basic: '300ms',
};

export const RADIUSES = {
  small: '4px',
  medium: '8px',
};

export const flex = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  start: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  between: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  end: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};

export const OPACITY = {
  disabledButton: 0.4,
};

export const Z_INDEXES = {
  dropdown: 1,
  editTaskModal: 2,
};
