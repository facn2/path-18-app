import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  height: 70%;
  margin: 2rem 2rem 0;
  overflow: auto;
  border: 0.15rem solid gainsboro;
  border-width: thin;
  border-radius: 3%;
  box-shadow: -0.1rem 0.1rem 0.5rem darkgrey;
`;

const CardImageWrapper = styled.div`
  height: 70%;
  background-color: gainsboro;
  margin: 7%;
`;

const CareerTextWrapper = styled.div`
  color: black;
  bottom: 0.75rem;
  height: 8%;
  text-align: center;
  font-size: 1.25rem;
  margin: 0 7%;
`;

const CareerTitle = styled.h1`
  margin-bottom: 5%;
`;

const CareerTagline = styled.p`
  text-align: right;
  font-size: 1rem;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardImageWrapper>{/* insert image here */}</CardImageWrapper>
      <CareerTextWrapper>
        <CareerTitle>Doctor</CareerTitle>
        <CareerTagline>This is what a doctor does</CareerTagline>
      </CareerTextWrapper>
    </CardContainer>
  );
};

export default Card;
