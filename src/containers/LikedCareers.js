import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fetchLikedCareers from '../actions/fetch_liked_careers';

const LikedContainer = styled.div`
  width: 100%;
`;

const LikedTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid gainsboro;
  border-width: thin;
  height: 4rem;
`;

const LikedTitle = styled.h1`
  color: #00796b;
`;

const LikedList = styled.ul`
  width: 100%;
  height: 80%;
`;

const LikedListItem = styled.li`
  width: 100%;
  height: 3rem;
  border-bottom: 0.1rem solid gainsboro;
  border-width: thin;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  &:active {
    background-color: gainsboro;
  }
`;

const CareerLink = styled(Link)`
  color: #455a64;
  text-decoration: none;
  width: 100%;
`;

const LikedListText = styled.p`
  text-align: right;
  padding-right: 5%;
`;

const LikedListIcon = styled.i`
  padding-right: 0.9rem;
  font-size: 1.5rem;
  color: #d32f2f;
  cursor: pointer;
  user-select: none;
`;

class LikedCareers extends Component {
  componentDidMount() {
    this.props.fetchLikedCareers();
  }

  likedCareersList = () => {
    if (
      this.props.matchedCareers.dataFetched &&
      this.props.matchedCareers.likedCareers.length
    ) {
      return (
        <LikedList>
          {this.props.matchedCareers.likedCareers.map(career => {
            return (
              <LikedListItem key={`career${career.id}`}>
                <CareerLink to={{ pathname: `career/${career.title_ar}` }}>
                  <LikedListText>{career.title_ar}</LikedListText>
                </CareerLink>
                <LikedListIcon className="material-icons">clear</LikedListIcon>
              </LikedListItem>
            );
          })}
        </LikedList>
      );
    }
  };

  render() {
    return (
      <LikedContainer>
        <LikedTitleWrapper>
          <LikedTitle>Your liked careers...</LikedTitle>
        </LikedTitleWrapper>
        {this.likedCareersList()}
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
