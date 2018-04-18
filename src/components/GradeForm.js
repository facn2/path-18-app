import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GradeFormWrapper = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormInput = styled.input`
  color: #455a64;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  width: 40%;
  background-color: white;
  border-color: #909ca0;
  border-style: double;
  border-radius: 4%;
`;

const FormLabel = styled.label`
  color: #455a64;
`;

const TitleSection = styled.div`
  margin-top: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #26a69a;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Tagline = styled.h3`
  color: #455a64;
  padding-top: 1rem;
`;

class GradeForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: this.props.match.params.id,
      bagrut_grade: e.target.bagrut_grade.value,
      psychometric_grade: e.target.psychometric_grade.value,
      tawjihi_grade: e.target.tawjihi_grade.value,
    };

    axios
      .put('/__/user/grades', data)
      .then(() => (window.location = '/careers'))
      .catch(() => (window.location = '/login'));
  }

  render() {
    this.handleSubmit = this.handleSubmit.bind(this);

    return (
      <GradeFormWrapper>
        <TitleSection>
          <Title>Path 18</Title>
          <Tagline>Before we continue we need your...</Tagline>
        </TitleSection>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel>Bagrut grade</FormLabel>
          <FormInput type="number" min="0" max="120" name="bagrut_grade" />
          <FormLabel>Psychometri grade</FormLabel>
          <FormInput
            type="number"
            min="200"
            max="800"
            name="psychometric_grade"
          />
          <FormLabel>Tawjihi grade</FormLabel>
          <FormInput type="number" min="0" max="100" name="tawjihi_grade" />
          <FormInput type="submit" />
        </Form>
      </GradeFormWrapper>
    );
  }
}

export default GradeForm;
