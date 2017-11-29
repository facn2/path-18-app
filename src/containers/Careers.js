import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';

const CareersContainer = styled.div`
  background-color: whitesmoke;
  padding-top: 1%;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

class Careers extends Component {
  render() {
    return (
      <CareersContainer>
        <Card />
        <LikeAndDislikeButtons />
      </CareersContainer>
    );
  }
}

export default Careers;
