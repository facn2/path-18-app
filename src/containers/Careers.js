import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchCareers from '../actions/fetch_careers';

const CareersContainer = styled.div`
  color: blue;
`;
const MainTitle = styled.h1``;

class Careers extends Component {
  componentWillMount() {
    this.props.fetchCareers();
  }

  render() {
    return (
      <CareersContainer>
        <MainTitle> This is Career! </MainTitle>
      </CareersContainer>
    );
  }
}

const mapDispatchToProps = {
  fetchCareers,
};

export default connect(null, mapDispatchToProps)(Careers);
