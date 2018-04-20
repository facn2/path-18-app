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
  constructor(props) {
    super();

    this.state = {
      bagrut: '',
      psychometric: '',
      tawjihi: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { bagrut, psychometric, tawjihi } = this.state;

    const data = {
      bagrut_grade: bagrut,
      psychometric_grade: psychometric,
      tawjihi_grade: tawjihi,
    };

    axios
      .put('/__/user/grades', data)
      .then(() => (window.location = '/careers'))
      .catch(() => (window.location = '/'));
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
          <FormInput
            type="number"
            min="0"
            max="120"
            name="bagrut_grade"
            value={this.state.bagrut || ''}
            onChange={e => this.setState({ bagrut: e.target.value })}
          />
          <FormLabel>Psychometric grade</FormLabel>
          <FormInput
            type="number"
            min="200"
            max="800"
            name="psychometric_grade"
            value={this.state.psychometric || ''}
            onChange={e => this.setState({ psychometric: e.target.value })}
          />
          <FormLabel>Tawjihi grade</FormLabel>
          <FormInput
            type="number"
            min="0"
            max="100"
            name="tawjihi_grade"
            value={this.state.tawjihi || ''}
            onChange={e => this.setState({ tawjihi: e.target.value })}
          />
          <FormInput type="submit" />
        </Form>
      </GradeFormWrapper>
    );
  }

  componentDidMount() {
    axios
      .get('/__/user/details')
      .then(res => this.setState(res.data))
      .catch(() => (window.location = '/'));
  }
}

export default GradeForm;
