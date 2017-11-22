import React, { Component } from 'react';
import styled from 'styled-components';
import Form from '../components/Form.js';

const CareerForm = styled.div`
  color: grey;
  font-size: 0.8rem;
`;
const MainTitle = styled.h1``;

class AddCareer extends Component {
  render() {
    return (
      <CareerForm>
        <MainTitle>
          To add more career options, please fill out this form
        </MainTitle>
        <Form />
      </CareerForm>
    );
  }
}

export default AddCareer;
