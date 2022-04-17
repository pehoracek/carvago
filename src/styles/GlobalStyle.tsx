import {createGlobalStyle} from 'styled-components/macro';
import {
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  RADIUSES,
  TRANSITIONS,
} from '../constants/style';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto-Regular.ttf');
    font-weight: 400;  
    font-display: swap;
   }
  
   @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto-Medium.ttf');
    font-weight: 500;
    font-display: swap;
   }
  
   @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto-Bold.ttf');
    font-weight: 700;
    font-display: swap;
   }
  
   html {
    font-size: 16px;
   }
   
   body {
     min-width: ${BREAKPOINTS.min};
   }
  
   html,
   body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    min-width: ${BREAKPOINTS.min};
    background: ${COLORS.bg};
   }
  
   a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
   }
  
   * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    margin: 0;
    padding: 0;
   }
  
   a {
     text-decoration: none;
     color: inherit;
     display: block;
     flex-shrink: 0;
   }
   
   input, textarea {
     background: ${COLORS.white};
     border: 1px solid ${COLORS.darkGrey};
     font-size: ${FONT_SIZES.input};
     line-height: ${LINE_HEIGHTS.input};
     border-radius: ${RADIUSES.small};
     padding: 5px 7px;
     width: 100%;
   }
   
   textarea {
     min-height: 120px;
     resize: vertical;
   }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
     color: ${COLORS.black};
    }
    h1 {
      font-size: ${FONT_SIZES.h1};
      line-height: ${LINE_HEIGHTS.h1};
      font-weight: ${FONT_WEIGHTS.bold};
    }

   h2 {
     font-size: ${FONT_SIZES.h2};
     line-height: ${LINE_HEIGHTS.h2};
     font-weight: ${FONT_WEIGHTS.bold};
   }

   h3 {
     font-size: ${FONT_SIZES.h3};
     line-height: ${LINE_HEIGHTS.h3};
     font-weight: ${FONT_WEIGHTS.medium}
   }

   h4 {
     font-size: ${FONT_SIZES.h4};
     line-height: ${LINE_HEIGHTS.h4};
     font-weight: ${FONT_WEIGHTS.medium}
   }

   h5 {
     font-size: ${FONT_SIZES.h5};
     line-height: ${LINE_HEIGHTS.h5};
     font-weight: ${FONT_WEIGHTS.medium}
   }

   p {
     font-size: ${FONT_SIZES.p};
     line-height: ${LINE_HEIGHTS.p};
   }
  
   img {
     display: block;
   }
  
   button {
     cursor: pointer;
     border: 0;
     flex-shrink: 0;
     transition: all ${TRANSITIONS.basic};
     font-size: ${FONT_SIZES.button};
     line-height: ${LINE_HEIGHTS.button};
     font-weight: 400;
     border-radius: ${RADIUSES.small};
     color: ${COLORS.black};
   }
`;

export default GlobalStyle;
