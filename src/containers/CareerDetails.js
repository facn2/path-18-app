import React, { Component } from 'react';
import styled from 'styled-components';

const CareerContainer = styled.div`
  background-color: whitesmoke;
`;
const MainTitle = styled.h1``;
const careerTitle = styled.h1``;
const generalSection = styled.section``;
const careerImage = styled.img``;
const careerDescription = styled.p``;
const uniSection = styled.section``;
const university = styled.h3``;
const universityTitle = styled.h4``;
const grades = styled.h3``;
const gradeBagrut = styled.p``;
const gradePsyc = styled.p``;
const gradeTawjihi = styled.p``;
const salarySection = styled.section``;
const salary = styled.h3``;
const salarySrart = styled.p``;
const salaryTenYear = styled.p``;

class CareerDetails extends Component {
  render() {
    return (
      <CareerContainer>
        <MainTitle>This is career details</MainTitle>
        <careerTitle />
        <generalSection>
          <careerImage />
          <careerDescription />
        </generalSection>
        <uniSection>
          <university>University:</university>
          <universityTitle />
          <grades>Grades:</grades>
          <gradeBagrut />
          <gradePsyc />
          <gradeTawjihi />
        </uniSection>
        <salarySection>
          <salary>Salary:</salary>
          <salarySrart />
          <salaryTenYear />
        </salarySection>
      </CareerContainer>
    );
  }
}

export default CareerDetails;
