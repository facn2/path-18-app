import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const CareerContainer = styled.div`
  background-color: red;
`;
const MainTitle = styled.h1``;

class CareerDetails extends Component {
  render() {
    return (
      <CareerContainer>
        <NavBar />
        <MainTitle> This is CareerDetails</MainTitle>
      </CareerContainer>
    );
  }
}

export default CareerDetails;
