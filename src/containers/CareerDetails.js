import React, { Component } from 'react';
import styled from 'styled-components';
import {
  CareerContainer,
  GeneralSection,
  CareerTitle,
  About,
  CareerDescription,
  SalarySection,
  Salary,
  SalarySrart,
  Start,
  SalaryTenYear,
  TenYear,
  UniSection,
  University,
  GradesContainer,
  TableRow1,
  TableRow2,
  TableRow3,
  TableRow4,
  Column1,
  Column2,
  Grades,
  GradeBagrut,
  ReqBagrut,
  UserBagrut,
  GradePsyc,
  ReqPsyc,
  UserPsyc,
  GradeTawjihi,
  ReqTawjihi,
  UserTawjihi
} from './../styles/details.js';

class CareerDetails extends Component {
  render() {
    return (
      <CareerContainer>
        <GeneralSection>
          <CareerTitle> Doctor </CareerTitle>
        </GeneralSection>
        <CareerDescription>
          <About>About</About>
          A doctor is someone who is qualified in medicine and treats people who
          are ill.
        </CareerDescription>
        <SalarySection>
          <Salary>Salary</Salary>
          <SalarySrart>
            Junior Salary:
            <Start> 7,000 </Start>
          </SalarySrart>
          <SalaryTenYear>
            Senior Salary:
            <TenYear> 25,000 </TenYear>
          </SalaryTenYear>
        </SalarySection>
        <UniSection>
          <University>Haifa University</University>
          <GradesContainer>
            <TableRow1>
              <Grades>Grades</Grades>
              <Column1 />
              <Column2 />
            </TableRow1>
            <TableRow2>
              <GradeBagrut>Bagrut:</GradeBagrut>
              <ReqBagrut> 100.00 </ReqBagrut>
              <UserBagrut> 101.5 </UserBagrut>
            </TableRow2>
            <TableRow3>
              <GradeTawjihi>Tawjihi:</GradeTawjihi>
              <ReqTawjihi> 99.00 </ReqTawjihi>
              <UserTawjihi> - </UserTawjihi>
            </TableRow3>
            <TableRow4>
              <GradePsyc>Psychometric:</GradePsyc>
              <ReqPsyc> 740 </ReqPsyc>
              <UserPsyc> 720 </UserPsyc>
            </TableRow4>
          </GradesContainer>
        </UniSection>
      </CareerContainer>
    );
  }
}

export default CareerDetails;
