import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 100%;
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

const CareerCard = ({ card }) => (
  <CardContainer>
    <CardImageWrapper />
    <CareerTextWrapper>
      <CareerTitle>{card.title_ar}</CareerTitle>
      <CareerTagline>{card.tagline_ar}</CareerTagline>
    </CareerTextWrapper>
  </CardContainer>
);

export default CareerCard;
