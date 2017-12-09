import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 100%;
  background-color: white;
  width: 100%;
  border-radius: 1rem;
  border: ${props => props.color} solid 0.3rem;
`;

const CardImageWrapper = styled.div`
  height: 70%;
  margin: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
`;

const CardIcon = styled.i`
  color: #fff;
  padding: 1.7rem;
  font-size: 7rem;
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
  <CardContainer color={card.icon_color}>
    <CardImageWrapper>
      <IconWrapper color={card.icon_color}>
        <CardIcon className="material-icons">{card.icon_name}</CardIcon>
      </IconWrapper>
    </CardImageWrapper>
    <CareerTextWrapper>
      <CareerTitle>{card.title_ar}</CareerTitle>
      <CareerTagline>{card.tagline_ar}</CareerTagline>
    </CareerTextWrapper>
  </CardContainer>
);

export default CareerCard;
