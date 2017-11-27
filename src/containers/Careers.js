import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';

const CareersContainer = styled.div`
  background-color: seashell;
  padding-top: 1%;
  height: 90vh;
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
