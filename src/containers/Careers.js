import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Swing from 'react-swing';
import { Direction } from 'swing';
import ReactDOM from 'react-dom';
import CareerCard from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';
import FinalCard from '../components/FinalCard';

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

const CardWrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  border-width: thin;
  border-radius: 1rem;
  &:last-child,
  &:first-child {
    box-shadow: 0 0.22rem 0.44rem rgba(0, 0, 0, 0.09),
      0 0.22rem 0.44rem rgba(0, 0, 0, 0.13);
  }
`;

const SwingWrapper = styled.div`
  position: relative;
  height: 70%;
  width: 80%;
  margin: 0 2rem;
  z-index: 0;
  overflow: visible;
`;

class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: null,
      currentCard: 1,
    };
  }

  componentDidMount() {
    this.props.fetchCareers();
  }

  hideButtons = () => {
    return this.props.careers.careerCards.length + 1 === this.state.currentCard;
  };

  swingShow = () => {
    if (this.props.careers.dataFetched) {
      return (
        <div>
          <Swing
            tagName="div"
            setStack={stack => this.setState({ stack: stack })}
            ref="stack"
            throwout={e => {
              this.setState({ currentCard: this.state.currentCard + 1 });
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
            {this.props.careers.careerCards.map((card, index) => (
              <CardWrapper
                ref={`card${index}`}
                id={`card${card.id}`}
                key={card.id}
              >
                <CareerCard card={card} />
              </CardWrapper>
            ))}
          </Swing>
          <FinalCard />
        </div>
      );
    }
    // TODO render loading
    return <div />;
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
    const cardRef = `card${this.props.careers.careerCards.length -
      this.state.currentCard}`;
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
        <LikeAndDislikeButtons
          throwCard={this.throwCard.bind(this)}
          hide={this.hideButtons()}
        />
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
