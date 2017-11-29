import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  height: 70%;
  margin: 0 2rem;
  overflow: auto;
  border-width: thin;
  border-radius: 1rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.09),
    0 0.4rem 0.4rem rgba(0, 0, 0, 0.16);
`;

const CardImageWrapper = styled.div`
  height: 70%;
  background-color: gainsboro;
  margin: 7%;
`;

const CareerTextWrapper = styled.div`
  color: black;
  text-align: center;
  font-size: 1.25rem;
  margin: 0 7%;
`;

const CareerTitle = styled.h1`
  margin-bottom: 5%;
`;

const CareerTagline = styled.p`
  text-align: center;
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
