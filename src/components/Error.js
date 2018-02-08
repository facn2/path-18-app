import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: whitesmoke;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #26a69a;
  font-weight: bold;
  font-size: 5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const SubTitle = styled.h3`
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  color: #455a64;
`;

const ErrorComponent = props => {
  if (props.location) {
    return (
      <Container>
        <Title>{props.location.state.error.code}</Title>
        <SubTitle>{props.location.state.error.message}</SubTitle>
      </Container>
    );
  }
  return (
    <Container>
      <Title>{props.error.code}</Title>
      <SubTitle>{props.error.message}</SubTitle>
    </Container>
  );
};

export default ErrorComponent;
