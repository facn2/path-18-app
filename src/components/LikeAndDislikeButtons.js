import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import T from 'i18n-react';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
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
  opacity: ${props => (props.cardLength ? '1' : '0')};
  animation: ${props =>
    props.hide
      ? props.side === 'left'
        ? `${goLeft} 0.2s ease-in forwards`
        : `${goRight} 0.2s ease-in forwards`
      : 'none'};
`;

const goRight = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(10rem);
	}
`;

const goLeft = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-10rem);
}
`;

const LikedIcon = styled(Icon)`
  color: #26a69a;
`;

const DislikedIcon = styled(Icon)`
  color: #d32f2f;
`;

const StyledLink = styled(Link)``;

const LikedButton = styled.button`
  text-decoration: none;
  background-color: #f06292;
  color: #fff;
  text-align: center;
  box-shadow: 0 0.22rem 0.44rem rgba(0, 0, 0, 0.09),
    0 0.22rem 0.44rem rgba(0, 0, 0, 0.13);
  ${'' /* border: 0.2rem solid gainsboro; */} border-radius: 3rem;
  height: 3rem;
  text-overflow: clip;
  overflow: hidden;
  ${props =>
    props.hide && props.dataFetched
      ? `font-size: 1rem;
width: 10rem;
opacity: 1`
      : `font-size: 0rem;
width: 0rem;
opacity: 0`};
  transition: 0.2s width ease, 0.2s font-size ease;
`;

const LikeAndDislikeButtons = ({
  throwCard,
  hide,
  cardLength,
  dataFetched,
}) => {
  return (
    <ButtonContainer>
      <IconWrapper hide={hide} side={'left'} cardLength={cardLength}>
        <DislikedIcon
          className="material-icons"
          onClick={() => (hide ? null : throwCard('left'))}
        >
          clear
        </DislikedIcon>
      </IconWrapper>
      <StyledLink to="/careers/liked">
        <LikedButton hide={hide} dataFetched={dataFetched}>
          <T.text text={{ key: '/careers.likedCareers' }} />
        </LikedButton>
      </StyledLink>
      <IconWrapper hide={hide} side={'right'} cardLength={cardLength}>
        <LikedIcon
          className="material-icons"
          onClick={() => (hide ? null : throwCard('right'))}
        >
          done
        </LikedIcon>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default LikeAndDislikeButtons;
