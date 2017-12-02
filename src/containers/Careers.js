import React, { Component } from 'react';
import styled from 'styled-components';
import Swing from 'react-swing';
import { Direction, Card } from 'swing';
import CareerCard from '../components/Card';
import LikeAndDislikeButtons from '../components/LikeAndDislikeButtons';

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

class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: null,
    };
  }

  render() {
    return (
      <CareersContainer>
        <SwingWrapper>
          <Swing
            tagName="div"
            setStack={stack => this.setState({ stack: stack })}
            ref="stack"
            throwout={e => {
              console.log(e);
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
            <div className="cardwrapper" ref="card1">
              <CareerCard />
            </div>
            <div className="cardwrapper" ref="card2">
              <CareerCard />
            </div>
          </Swing>
        </SwingWrapper>
        <LikeAndDislikeButtons />
      </CareersContainer>
    );
  }
}

export default Careers;
