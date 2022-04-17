import React from 'react';
import styled from 'styled-components/macro';
import Tasks from '../main/Tasks';
import {breakpoint} from '../../utils/style';
import {NUM_BREAKPOINTS} from '../../constants/style';

const Main = () => (
  <MainSection>
    <Tasks />
  </MainSection>
);

export default Main;

const MainSection = styled.main`
  min-height: calc(100vh - 146px);
  padding: 16px 16px 60px;

  @media screen and (min-height: 650px) {
    min-height: calc(100vh - 146px);
  }

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    overflow: auto;
  }
`;
