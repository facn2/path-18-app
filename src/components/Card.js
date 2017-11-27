import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: seashell;
  height: 70%;
  margin: 2rem 2rem 0;
  overflow: auto;
  border: 0.15rem solid dimgrey;
  border-radius: 3%;
  box-shadow: -0.15rem 0.25rem 0.5rem dimgrey;
`;

const CardImageWrapper = styled.div`
  height: 80%;
  background-color: dimgray;
  margin: 7%;
`;

const CareerTitleWrapper = styled.div`
  color: black;
  bottom: 0.75rem;
  height: 8%;
  text-align: center;
  font-size: 1.25rem;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardImageWrapper>{/* insert image here */}</CardImageWrapper>
      <CareerTitleWrapper>Doctor</CareerTitleWrapper>
    </CardContainer>
  );
};

export default Card;
