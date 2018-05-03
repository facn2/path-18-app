import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import T from 'i18n-react';
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
  Salary,
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
        <SectionTitle>{`${
          uni[`name_${this.props.currentLang}`]
        }`}</SectionTitle>
        <Icon className="material-icons" onClick={this.next}>
          keyboard_arrow_right
        </Icon>
      </TitleWrapper>
      <TableContainer>
        <TableColumn>
          <GradeTitle>
            <T.text text={{ key: '/careers/details.grades.yours' }} />
          </GradeTitle>
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
              uni.grade_psychometric,
            )}
          >
            {this.props.careerDetail.career.userGrades[0].grade_psychometric}
          </Grade>
        </TableColumn>
        <TableColumn>
          <GradeTitle>
            <T.text text={{ key: '/careers/details.grades.required' }} />
          </GradeTitle>
          <Grade> {uni.grade_bagrut || 0} </Grade>
          <Grade> {uni.grade_tawjihi || 0} </Grade>
          <Grade> {uni.grade_psychometric || 0} </Grade>
        </TableColumn>
        <TableColumn>
          <GradeTitle>
            <T.text text={{ key: '/careers/details.grades.typeOfGrades' }} />
          </GradeTitle>
          <Grade>
            <T.text text={{ key: '/careers/details.grades.bagrut' }} />
          </Grade>
          <Grade>
            <T.text text={{ key: '/careers/details.grades.tawjihi' }} />
          </Grade>
          <Grade>
            <T.text text={{ key: '/careers/details.grades.psychometric' }} />
          </Grade>
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
                {
                  this.props.careerDetail.career.career[0][
                    `title_${this.props.currentLang}`
                  ]
                }
              </CareerTitle>
              <CareerTagline>
                {
                  this.props.careerDetail.career.career[0][
                    `tagling{this.props.currentLang}`
                  ]
                }
              </CareerTagline>
            </TitleTagWrapper>
            <CareerLogo className="material-icons">
              {this.props.careerDetail.career.career[0].icon_name}
            </CareerLogo>
          </TopSection>

          <DetailSection>
            <Description>
              {
                this.props.careerDetail.career.career[0][
                  `description_${this.props.currentLang}`
                ]
              }
            </Description>
            <TitleWrapper>
              <SectionTitle>
                <T.text text={{ key: '/careers/details.salary.title' }} />
              </SectionTitle>
            </TitleWrapper>
            <TableContainer>
              <TableColumn>
                <Salary>
                  {this.props.careerDetail.career.career[0].salary_start} ₪
                </Salary>
                <Salary>
                  {this.props.careerDetail.career.career[0].salary_ten_year} ₪
                </Salary>
              </TableColumn>
              <TableColumn>
                <Salary>
                  <T.text text={{ key: '/careers/details.salary.junior' }} />
                </Salary>
                <Salary>
                  <T.text text={{ key: '/careers/details.salary.senior' }} />
                </Salary>
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
    } else if (this.props.careerDetail.error) {
      return (
        <Redirect
          to={{
            pathname: '/error',
            state: { error: { code: 401, message: 'Not Authorised' } },
          }}
        />
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
