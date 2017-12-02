import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 100%;
  padding-top: 2%;
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

const Card = () => (
  <CardContainer>
    <CardImageWrapper />
    <CareerTextWrapper>
      <CareerTitle>Doctor</CareerTitle>
      <CareerTagline>This is what a doctor does</CareerTagline>
    </CareerTextWrapper>
  </CardContainer>
);

export default Card;
