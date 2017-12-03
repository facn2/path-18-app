import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchLikedCareers from '../actions/fetch_liked_careers';

const LikedContainer = styled.div`
  width: 100%;
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
  color: #455a64;
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
                <LikedListText>{career.title_ar}</LikedListText>
                <LikedListIcon className="material-icons">clear</LikedListIcon>
              </LikedListItem>
            );
          })}
        </LikedList>
      );
    }
  };

  render() {
    return <LikedContainer>{this.likedCareersList()}</LikedContainer>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLikedCareers: () => dispatch(fetchLikedCareers()),
});

const mapStateToProps = state => ({
  matchedCareers: state.matchedCareers,
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedCareers);
