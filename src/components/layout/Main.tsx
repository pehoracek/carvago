import React from 'react';
import styled from 'styled-components/macro';
import Tasks from '../main/Tasks';

const Main = () => (
  <MainSection>
    <Tasks />
  </MainSection>
);

export default Main;

const MainSection = styled.main`
  overflow: auto;
  min-height: calc(100vh - 146px);
  padding: 16px 16px 60px;

  @media screen and (min-height: 650px) {
    height: calc(100vh - 146px);
  }
`;
