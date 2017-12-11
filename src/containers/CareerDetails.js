import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  CareerLogo,
  TitleWrapper,
  Description,
  TopSection,
  CareerTagline,
  TitleTagWrapper,
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

import { fetchDetails } from '../actions/career_details';

class CareerDetails extends Component {
  componentDidMount() {
    this.props.fetchDetails({ career_id: this.props.match.params.id });
  }

  showDetails = () => {
    if (this.props.careerDetail.dataFetched) {
      return (
        <div>
          <TopSection>
            <TitleTagWrapper>
              <CareerTitle>
                {this.props.careerDetail.career.career[0].title_ar}
              </CareerTitle>
              <CareerTagline>
                {this.props.careerDetail.career.career[0].tagline_ar}
              </CareerTagline>
            </TitleTagWrapper>
            <CareerLogo className="material-icons">
              {this.props.careerDetail.career.career[0].icon_name}
            </CareerLogo>
          </TopSection>

          <DetailSection>
            <Description>
              {this.props.careerDetail.career.career[0].description_ar}
            </Description>
            <TitleWrapper>
              <SectionTitle>Salary</SectionTitle>
            </TitleWrapper>
            <TableContainer>
              <TableColumn>
                <Start>
                  ₪ {this.props.careerDetail.career.career[0].salary_start}
                </Start>
                <TenYear>
                  ₪ {this.props.careerDetail.career.career[0].salary_ten_year}
                </TenYear>
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
        </div>
      );
    }
  };

  render() {
    return <CareerContainer>{this.showDetails()}</CareerContainer>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDetails: id => dispatch(fetchDetails(id)),
});

const mapStateToProps = state => ({
  matchedCareers: state.matchedCareers,
  careerDetail: state.careerDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(CareerDetails);
