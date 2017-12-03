import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchLikedCareers from '../actions/fetch_liked_careers';

const LikedContainer = styled.div`
  color: green;
`;
const MainTitle = styled.h1``;

class LikedCareers extends Component {
  componentDidMount() {
    this.props.fetchLikedCareers();
  }

  render() {
    return (
      <LikedContainer>
        <MainTitle>This is LikedCareers</MainTitle>
      </LikedContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLikedCareers: () => dispatch(fetchLikedCareers()),
});

const mapStateToProps = state => ({
  matchedCareers: state.matchedCareers,
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedCareers);
