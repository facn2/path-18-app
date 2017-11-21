import React, { Component } from 'react';
import styled from 'styled-components';

const CareerContainer = styled.div`
  background-color: red;
`;
const MainTitle = styled.h1``;

class CareerDetails extends Component {
  render() {
    return (
      <CareerContainer>
        <MainTitle> This is CareerDetails</MainTitle>
      </CareerContainer>
    );
  }
}

export default CareerDetails;
