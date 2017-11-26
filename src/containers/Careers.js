import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const CareersContainer = styled.div`
  color: blue;
`;

class Careers extends Component {
  render() {
    return (
      <CareersContainer>
        <Card />
      </CareersContainer>
    );
  }
}

export default Careers;
