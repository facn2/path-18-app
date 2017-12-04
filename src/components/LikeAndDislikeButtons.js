import React from 'react';
import styled, { keyframes } from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.i`
  font-size: 2rem;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid gainsboro;
  width: 4rem;
  height: 4rem;
`;

const IconLeft = styled(IconWrapper)`
  animation: ${props =>
    props.side === 'left' && props.hide
      ? `${goSmallRight} 0.2s ease-in forwards`
      : 'none'};
`;

const IconRight = styled(IconWrapper)`
  animation: ${props =>
    props.side === 'right' && props.hide
      ? `${goSmallLeft} 0.2s ease-in forwards`
      : 'none'};
`;

const goSmallRight = keyframes`
	from {
		transform: scale(1, 1) translate(0, 0);
	}
	to {
		transform: scale(0, 0) translate(20rem, 0);
	}
`;

const goSmallLeft = keyframes`
from {
  transform: scale(1, 1) translate(0, 0);
}
to {
  transform: scale(0, 0) translate(-20rem, 0);
}
`;

const LikedIcon = styled(Icon)`
  color: #26a69a;
`;

const DislikedIcon = styled(Icon)`
  color: #d32f2f;
`;

const LikeAndDislikeButtons = ({ throwCard, hide }) => {
  return (
    <ButtonContainer>
      <IconLeft hide={hide} side={'left'}>
        <DislikedIcon
          className="material-icons"
          onClick={() => (hide ? null : throwCard('left'))}
        >
          clear
        </DislikedIcon>
      </IconLeft>
      <IconRight hide={hide} side={'right'}>
        <LikedIcon
          className="material-icons"
          onClick={() => (hide ? null : throwCard('right'))}
        >
          done
        </LikedIcon>
      </IconRight>
    </ButtonContainer>
  );
};

export default LikeAndDislikeButtons;
