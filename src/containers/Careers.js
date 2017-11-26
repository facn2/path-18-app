import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const CareersContainer = styled.div`
  color: blue;
`;
const MainTitle = styled.h1``;

class Careers extends Component {
  render() {
    return (
      <CareersContainer>
        <MainTitle> This is Career! </MainTitle>
        <Card />
      </CareersContainer>
    );
  }
}

export default Careers;
