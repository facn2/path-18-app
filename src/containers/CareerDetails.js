import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
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
  GradeTitle,
  UniWrapper,
} from './../styles/details.js';

import { fetchDetails } from '../actions/career_details';

class CareerDetails extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount() {
    this.props.fetchDetails({ career_id: this.props.match.params.id });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  compareGrades(userGradeKey, uniGrade) {
    if (this.props.careerDetail.career.userGrades[0][userGradeKey] > uniGrade) {
      return 'passed';
    }
    return 'not passed';
  }

  uniGrades = uni => (
    <UniWrapper key={uni.uni_id}>
      <TitleWrapper>
        <Icon className="material-icons" onClick={this.previous}>
          keyboard_arrow_left
        </Icon>
        <SectionTitle>{`${uni.name_ar} University`}</SectionTitle>
        <Icon className="material-icons" onClick={this.next}>
          keyboard_arrow_right
        </Icon>
      </TitleWrapper>
      <TableContainer>
        <TableColumn>
          <GradeTitle>Yours</GradeTitle>
          <Grade passed={this.compareGrades('grade_bagrut', uni.grade_bagrut)}>
            {this.props.careerDetail.career.userGrades[0].grade_bagrut}
          </Grade>
          <Grade
            passed={this.compareGrades('grade_tawjihi', uni.grade_tawjihi)}
          >
            {this.props.careerDetail.career.userGrades[0].grade_tawjihi}
          </Grade>
          <Grade
            passed={this.compareGrades(
              'grade_psychometric',
              uni.grade_psychometric
            )}
          >
            {this.props.careerDetail.career.userGrades[0].grade_psychometric}
          </Grade>
        </TableColumn>
        <TableColumn>
          <GradeTitle>Required</GradeTitle>
          <Grade> {uni.grade_bagrut} </Grade>
          <Grade> {uni.grade_tawjihi} </Grade>
          <Grade> {uni.grade_psychometric} </Grade>
        </TableColumn>
        <TableColumn>
          <GradeTitle>Type of Grade</GradeTitle>
          <Grade>Bagrut</Grade>
          <Grade>Tawjihi</Grade>
          <Grade>Psychometric</Grade>
        </TableColumn>
      </TableContainer>
    </UniWrapper>
  );

  showDetails = () => {
    const settings = {
      dots: true,
      centerMode: true,
      accessibility: true,
      speed: 300,
      swipeToSlide: true,
      draggable: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 0,
    };
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
                  {this.props.careerDetail.career.career[0].salary_start} ₪
                </Start>
                <TenYear>
                  {this.props.careerDetail.career.career[0].salary_ten_year} ₪
                </TenYear>
              </TableColumn>
              <TableColumn>
                <SalaryStart>Junior </SalaryStart>
                <SalaryTenYear>Senior</SalaryTenYear>
              </TableColumn>
            </TableContainer>
          </DetailSection>

          <DetailSection>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.props.careerDetail.career.uniGrades.map(this.uniGrades)}
            </Slider>
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
