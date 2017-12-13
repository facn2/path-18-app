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
  Grade,
} from './../styles/details.js';

import { fetchDetails } from '../actions/career_details';

class CareerDetails extends Component {
  componentDidMount() {
    this.props.fetchDetails({ career_id: this.props.match.params.id });
  }

  uniGrades = uni => (
    <div key={uni.uni_id}>
      <TitleWrapper>
        <Icon className="material-icons">keyboard_arrow_left</Icon>
        <SectionTitle>{`${uni.name_ar} University`}</SectionTitle>
        <Icon className="material-icons">keyboard_arrow_right</Icon>
      </TitleWrapper>
      <TableContainer>
        <TableColumn>
          <Grade>Required</Grade>
          <Grade> {uni.grade_bagrut} </Grade>
          <Grade> {uni.grade_tawjihi} </Grade>
          <Grade> {uni.grade_psychometric} </Grade>
        </TableColumn>
        <TableColumn>
          <Grade>Yours</Grade>
          <Grade>
            {this.props.careerDetail.career.userGrades[0].grade_bagrut}
          </Grade>
          <Grade>
            {this.props.careerDetail.career.userGrades[0].grade_tawjihi}
          </Grade>
          <Grade>
            {this.props.careerDetail.career.userGrades[0].grade_psychometric}
          </Grade>
        </TableColumn>
        <TableColumn>
          <Grade>Type of Grade</Grade>
          <Grade>Bagrut</Grade>
          <Grade>Tawjihi</Grade>
          <Grade>Psychometric</Grade>
        </TableColumn>
      </TableContainer>
    </div>
  );

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
            </Description>{' '}
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
            {this.props.careerDetail.career.uniGrades.map(this.uniGrades)}
          </DetailSection>
        </div>
      );
    }
    return <div>Loading career details</div>;
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
