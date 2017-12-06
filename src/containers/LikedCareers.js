import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchLikedCareers, unlikeCareer } from '../actions/matched_careers';

const LikedContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  background-color: whitesmoke;
  height: 100%;
`;

const LikedTitleWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid gainsboro;
  border-width: thin;
  height: 100%;
  padding-top: 1.3rem;
  padding-bottom: 1.1rem;
`;

const LikedTitle = styled.h1`
  color: #00796b;
`;

const LikedDescription = styled.p`
  color: #455a64;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.3rem 1rem 0 1rem;
  line-height: 1rem;
`;

const LikedList = styled.ul`
  width: 100%;
  height: 80%;
`;

const LikedListItem = styled.li`
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  height: 3rem;
  transition: all 0.2s ease;
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
  padding-right: 0.9rem;
`;

const LikedListText = styled.p`
  text-align: right;
`;

const DeleteIcon = styled.i`
  padding-left: 0.9rem;
  font-size: 1.5rem;
  color: #9e9e9e;
  cursor: pointer;
  user-select: none;
`;

const CategoryIcon = styled.i`
  padding-right: 0.9rem;
  font-size: 1.6rem;
  color: #f06292;
  user-select: none;
`;

const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={205} classNames="fade">
    {children}
  </CSSTransition>
);

class LikedCareers extends Component {
  componentDidMount() {
    this.props.fetchLikedCareers();
  }

  likedCareersList = () => {
    return (
      <LikedList>
        <TransitionGroup>
          {this.props.matchedCareers.likedCareers.map(career => {
            return (
              <Fade key={`career${career.id}`}>
                <LikedListItem>
                  <DeleteIcon
                    className="material-icons"
                    onClick={() =>
                      career.isDeleting ? null : this.removeFromList(career.id)}
                  >
                    clear
                  </DeleteIcon>
                  <CareerLink to={{ pathname: `career/${career.title_ar}` }}>
                    <LikedListText>{career.title_ar}</LikedListText>
                  </CareerLink>
                  <CategoryIcon className="material-icons">
                    {career.icon_url}
                  </CategoryIcon>
                </LikedListItem>
              </Fade>
            );
          })}
        </TransitionGroup>
      </LikedList>
    );
  };

  removeFromList = id => {
    this.props.unlikeCareer({ career_id: id });
  };

  render() {
    return (
      <LikedContainer>
        <LikedTitleWrapper>
          <LikedTitle>Liked careers</LikedTitle>
          <LikedDescription>
            Click on a career for more details.
          </LikedDescription>
        </LikedTitleWrapper>
        {this.likedCareersList()}
      </LikedContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLikedCareers: () => dispatch(fetchLikedCareers()),
  unlikeCareer: id => dispatch(unlikeCareer(id)),
});

const mapStateToProps = state => ({
  matchedCareers: state.matchedCareers,
  unlikeCareer: state.unlikeCareer,
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedCareers);
