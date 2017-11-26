import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  color: grey;
  font-size: 0.8rem;
`;

const FormArabic = styled.div``;

const FormHebrew = styled.div``;

const Input = styled.input``;

const Submit = styled.input``;

const UniSelection = styled.input``;

const Universities = styled.h2``;

class Form extends Component {
  state = {
    title_ar: '',
    title_he: '',
    tagline_ar: '',
    tagline_he: '',
    description_ar: '',
    description_he: '',
    image_url: '',
    salary_start: '',
    salary_ten_year: '',
    icon_url: ''
  };

  componentWillMount() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {
      title_ar,
      title_he,
      tagline_ar,
      tagline_he,
      description_ar,
      description_he,
      image_url,
      salary_start,
      salary_ten_year,
      icon_url
    } = event.target.elements;

    const CareerData = {
      title_ar: title_ar.value,
      title_he: title_he.value,
      taline_ar: tagline_ar.value,
      tagline_he: tagline_he.value,
      description_ar: description_ar.value,
      description_he: description_he.value,
      image_url: image_url.value,
      salary_start: salary_start.value,
      salary_ten_year: salary_ten_year.value,
      icon_url: icon_url.value
    };
    console.log('The form inputs: ', CareerData);
    try {
      const res = await axios.post('/sendCareer', CareerData);
      if (res.data === 'all good') {
        console.log(res.statusCode);
        window.location.href = '/';
      } else {
        window.location.href = '/404';
      }
    } catch (err) {
      console.log('this is the err: ', err);
      window.location.href = '/404';
    }
  }
  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormArabic>
          <label>
            Career title (Arabic):
            <Input type="text" name="title_ar" />
          </label>
          <label>
            Career tagline (Arabic):
            <Input type="text" name="tagline_ar" />
          </label>
          <label>
            Description (Arabic):
            <Input type="text" name="description_ar" />
          </label>
        </FormArabic>

        <FormHebrew>
          <label>
            Career title (Hebrew):
            <Input type="text" name="title_he" />
          </label>
          <label>
            Career tagline (Hebrew):
            <Input type="text" name="tagline_he" />
          </label>
          <label>
            Description (Hebrew):
            <Input type="text" name="description_he" />
          </label>
        </FormHebrew>

        <label>
          Junior salary:
          <Input type="text" name="salary_start" />
        </label>
        <label>
          Senior salary:
          <Input type="text" name="salary_ten_year" />
        </label>
        <label>
          Image:
          <Input type="text" name="image_url" />
        </label>
        <label>
          Icon:
          <Input type="text" name="icon_url" />
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
