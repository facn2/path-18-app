import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  color: grey;
  font-size: 0.8rem;
`;
const Input = styled.input``;

const Submit = styled.input``;

const UniSelection = styled.input``;

const Universities = styled.h2``;

class Form extends Component {
  render() {
    return (
      <FormContainer>
        <label>
          Career title (Arabic):
          <Input type="text" />
        </label>
        <label>
          Career title (Hebrew):
          <Input type="text" />
        </label>
        <label>
          Career title (English):
          <Input type="text" />
        </label>
        <label>
          Career tagline (Arabic):
          <Input type="text" />
        </label>
        <label>
          Career tagline (Hebrew):
          <Input type="text" />
        </label>
        <label>
          Career tagline (English):
          <Input type="text" />
        </label>
        <label>
          Description (Arabic):
          <Input type="text" />
        </label>
        <label>
          Description (Hebrew):
          <Input type="text" />
        </label>
        <label>
          Description (English):
          <Input type="text" />
        </label>
        <label>
          Junior salary:
          <Input type="text" />
        </label>
        <label>
          Senior salary:
          <Input type="text" />
        </label>
        <label>
          Image:
          <Input type="text" />
        </label>
        <label>
          Icon:
          <Input type="text" />
        </label>
        <br />
        <Universities>Universities</Universities>
        <label>
          <UniSelection type="checkbox" />
          Haifa University
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <label>
          <UniSelection type="checkbox" />
          Technion
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <label>
          <UniSelection type="checkbox" />
          Hebrew University
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <label>
          <UniSelection type="checkbox" />
          Tel Aviv University
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <label>
          <UniSelection type="checkbox" />
          Arab American University
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <label>
          <UniSelection type="checkbox" />
          Ben Gurion University
        </label>
        <label>
          Required Bagrut Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Psychometric Grade:
          <UniSelection type="text" />
        </label>
        <label>
          Required Tawjihi Grade:
          <UniSelection type="text" />
        </label>
        <br />
        <Submit type="submit" value="Submit" />
      </FormContainer>
    );
  }
}

export default Form;
