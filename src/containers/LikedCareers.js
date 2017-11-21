import React, { Component } from 'react';
import styled from 'styled-components';

const LikedContainer = styled.div`
  color: green;
`;
const MainTitle = styled.h1``;

class LikedCareers extends Component {
  render() {
    return (
      <LikedContainer>
        <MainTitle>This is LikedCareers</MainTitle>
      </LikedContainer>
    );
  }
}

export default LikedCareers;
