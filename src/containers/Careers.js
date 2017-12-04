import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Swing from 'react-swing';
import { Direction } from 'swing';
import ReactDOM from 'react-dom';
import CareerCard from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';

import fetchCareers from '../actions/fetch_careers';
import likeCareerAction from '../actions/like_career';

const CareersContainer = styled.div`
  background-color: whitesmoke;
  padding-top: 1%;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const SwingWrapper = styled.div`
  position: relative;
  height: 70%;
  width: 80%;
  margin: 0 2rem;
  z-index: 0;
  overflow: visible;
`;

const FinalCard = styled.div`
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  position: absolute;
  border-width: thin;
  border-radius: 1rem;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  flex-grow: 4;
`;

const IconWrapper = styled.div`
  background-color: #26a69a;
  border-radius: 50%;
`;

const CompleteIcon = styled.i`
  padding: 1.2rem;
  font-size: 4rem;
  color: #fff;
`;

const WrapperText = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  font-size: 0.9rem;
  color: #455a64;
`;

const StyledLink = styled(Link)``;

const LikedButton = styled.button`
  text-decoration: none;
  background-color: #fff;
  color: #00796b;
  text-align: center;
  border: 0.1rem solid gainsboro;
  border-radius: 3rem;
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
`;

let swipeCount = 1;

class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: null,
    };
  }

  componentDidMount() {
    this.props.fetchCareers();
  }

  swingShow = () => {
    if (this.props.careers.dataFetched) {
      return (
        <div>
          <Swing
            tagName="div"
            setStack={stack => this.setState({ stack: stack })}
            ref="stack"
            throwout={e => {
              swipeCount++; // someone please suggest a better way to do this
              this.likeCareer(e);
            }}
            config={{
              allowedDirections: [Direction.LEFT, Direction.RIGHT],
              maxRotation: 5,
              minThrowOutDistance: 1000,
              maxThrowOutDistance: 1400,
              throwOutConfidence: (xOffset, yOffset, element) => {
                const xConfidence = Math.min(
                  Math.abs(xOffset) / element.offsetWidth,
                  1
                );
                const yConfidence = Math.min(
                  Math.abs(yOffset) / element.offsetHeight,
                  1
                );
                if (Math.max(xConfidence, yConfidence) > 0.65) {
                  return 1;
                }
                return Math.max(xConfidence, yConfidence);
              },
            }}
          >
            {this.props.careers.careerCards.map(card => (
              <div
                className="cardwrapper"
                ref={`card${card.id}`}
                id={`card${card.id}`}
                key={card.id}
              >
                <CareerCard card={card} />
              </div>
            ))}
          </Swing>
          <FinalCard>
            <Wrapper>
              <IconWrapper>
                <CompleteIcon className="material-icons">thumb_up</CompleteIcon>
              </IconWrapper>
            </Wrapper>
            <Wrapper>
              <WrapperText>
                You have swiped through all the careers. Check out the careers
                you have liked for more details.
              </WrapperText>
              <StyledLink to="/LikedCareers">
                <LikedButton>Liked Careers</LikedButton>
              </StyledLink>
            </Wrapper>
          </FinalCard>
        </div>
      );
    }
    // TODO render loading
    return;
  };

  likeCareer = e => {
    if (e.throwDirection.toString() === 'Symbol(RIGHT)') {
      return this.props.likeCareerAction({
        user_id: 1,
        career_id: Number(e.target.id.slice(4)),
      });
    }
  };

  throwCard = direction => {
    const cardRef = Object.keys(this.refs.stack.refs)[
      Object.keys(this.refs.stack.refs).length - swipeCount
    ];
    const target = this.refs.stack.refs[cardRef];
    const el = ReactDOM.findDOMNode(target);
    const card = this.state.stack.getCard(el);
    if (direction === 'right') {
      return card.throwOut(0.3, 0.1, Swing.DIRECTION.RIGHT);
    }
    return card.throwOut(0.3, 0.1, Swing.DIRECTION.LEFT);
  };

  render() {
    return (
      <CareersContainer>
        <SwingWrapper>{this.swingShow()}</SwingWrapper>
        <LikeAndDislikeButtons throwCard={this.throwCard.bind(this)} />
      </CareersContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCareers: () => dispatch(fetchCareers()),
  likeCareerAction: data => dispatch(likeCareerAction(data)),
});

const mapStateToProps = state => ({
  careers: state.careers,
  likedCareers: state.likedCareers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Careers);
