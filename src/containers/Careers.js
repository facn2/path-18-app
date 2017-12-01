import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';

import fetchCareers from '../actions/fetch_careers';

const CareersContainer = styled.div`
  background-color: whitesmoke;
  padding-top: 1%;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

class Careers extends Component {
  componentWillMount() {
    this.props.fetchCareers();
  }

  render() {
    return (
      <CareersContainer>
        <Card />
        <LikeAndDislikeButtons />
      </CareersContainer>
    );
  }
}

const mapDispatchToProps = {
  fetchCareers,
};

export default connect(null, mapDispatchToProps)(Careers);
