import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if (
      this.props.careers.dataFetched &&
      this.props.careers.careerCards.length
    ) {
      return (
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
