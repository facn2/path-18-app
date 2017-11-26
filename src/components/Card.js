import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: palevioletred;
  height: 20rem;
  margin: 2rem;
  overflow: auto;
`;

const CardImageWrapper = styled.div`
  height: 15rem;
  background-color: blue;
  margin: 1rem;
`;

const CareerTitleWrapper = styled.div`
  color: black;
  bottom: 0.75rem;
  margin-left: 1rem;
  font-size: 1.25rem;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardImageWrapper />
      <CareerTitleWrapper>This is the career title</CareerTitleWrapper>
    </CardContainer>
  );
};

export default Card;
