import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  CareerContainer,
  CareerTitle,
  SectionTitle,
  DetailSection,
  SalaryStart,
  Start,
  SalaryTenYear,
  TenYear,
  TableContainer,
  TableColumn,
  GradeBagrut,
  ReqBagrut,
  UserBagrut,
  GradePsyc,
  ReqPsyc,
  UserPsyc,
  GradeTawjihi,
  ReqTawjihi,
  UserTawjihi,
} from './../styles/details.js';

const Icon = styled.i`
  font-size: 2rem;
  color: #f06292;
`;

const CareerLogo = styled(Icon)`
  font-size: 1.5rem;
  background-color: #f06292;
  border-radius: 50%;
  color: #fff;
  padding: 0.5rem;
  display: inline-block;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const Description = styled.div`
  padding: 0 1rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 1rem 0;
`;

const CareerTagline = styled.div``;

const TitleTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.8rem;
`;

class CareerDetails extends Component {
  componentWillMount() {
    console.log(this.props.match.params.id);
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <CareerContainer>
        <TopSection>
          <TitleTagWrapper>
            <CareerTitle>Doctor</CareerTitle>
            <CareerTagline>Lorem ipsum dolor sit amet,</CareerTagline>
          </TitleTagWrapper>
          <CareerLogo className="material-icons">local_hospital</CareerLogo>
        </TopSection>

        <DetailSection>
          <Description>
            A physician, medical practitioner, medical doctor, or simply doctor
            is a professional who practises medicine, which is concerned with
            promoting, maintaining, or restoring health through the study,
            diagnosis, and treatment of disease, injury, and other physical and
            mental impairments.
          </Description>
          <TitleWrapper>
            <SectionTitle>Salary</SectionTitle>
          </TitleWrapper>
          <TableContainer>
            <TableColumn>
              <Start> ₪ 7,000 </Start>
              <TenYear> ₪ 25,000 </TenYear>
            </TableColumn>
            <TableColumn>
              <SalaryStart>Junior </SalaryStart>
              <SalaryTenYear>Senior</SalaryTenYear>
            </TableColumn>
          </TableContainer>
        </DetailSection>

        <DetailSection>
          <TitleWrapper>
            <Icon className="material-icons">keyboard_arrow_left</Icon>
            <SectionTitle>Haifa University</SectionTitle>
            <Icon className="material-icons">keyboard_arrow_right</Icon>
          </TitleWrapper>
          <TableContainer>
            <TableColumn>
              <ReqBagrut> 100.00 </ReqBagrut>
              <ReqTawjihi> 99.00 </ReqTawjihi>
              <ReqPsyc> 740 </ReqPsyc>
            </TableColumn>
            <TableColumn>
              <UserBagrut> 101.5 </UserBagrut>
              <UserTawjihi> - </UserTawjihi>
              <UserPsyc> 720 </UserPsyc>
            </TableColumn>
            <TableColumn>
              <GradeBagrut>Bagrut</GradeBagrut>
              <GradeTawjihi>Tawjihi</GradeTawjihi>
              <GradePsyc>Psychometric</GradePsyc>
            </TableColumn>
          </TableContainer>
        </DetailSection>
      </CareerContainer>
    );
  }
}

const mapStateToProps = state => ({
  matchedCareers: state.matchedCareers,
});

export default connect(mapStateToProps)(CareerDetails);
