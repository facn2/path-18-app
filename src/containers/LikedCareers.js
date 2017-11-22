import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const LikedContainer = styled.div`
  color: green;
`;
const MainTitle = styled.h1``;

class LikedCareers extends Component {
  render() {
    return (
      <LikedContainer>
        <NavBar />
        <MainTitle>This is LikedCareers</MainTitle>
      </LikedContainer>
    );
  }
}

export default LikedCareers;
