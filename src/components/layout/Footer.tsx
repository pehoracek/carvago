import React from 'react';
import styled from 'styled-components/macro';
import {flex, RADIUSES} from '../../constants/style';

const Footer = () => (
  <footer>
    <Link href="https://www.linkedin.com/in/petr-horacek/" target="_blank" rel="noreferrer">
      <h5>&copy; Petr Horáček</h5>
    </Link>
  </footer>
);

export default Footer;

const Link = styled.a`
  height: 60px;
  width: fit-content;
  margin: 0 auto;
  ${flex.center}
  align-items: flex-start;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  h5 {
    background: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 0.5rem 1.5rem;
    border-radius: ${RADIUSES.small};
  }
`;
