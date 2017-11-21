import React, { Component } from 'react';
import styled from 'styled-components';

const CareersContainer = styled.div`
  color: blue;
`;
const MainTitle = styled.h1``;

class Careers extends Component {
  render() {
    return (
      <CareersContainer>
        <MainTitle> This is Career! </MainTitle>
      </CareersContainer>
    );
  }
}

export default Careers;
