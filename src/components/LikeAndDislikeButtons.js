import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 7% 5% 7%;
`;

const Icon = styled.i`
  font-size: 3rem;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  background-color: white;
  border: 0.15rem solid dimgrey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -0.15rem 0.35rem 0.5rem dimgrey;
  width: 4rem;
  height: 4rem;
`;

const LikedIcon = styled(Icon)`
  color: limegreen;
`;

const DislikedIcon = styled(Icon)`
  color: firebrick;
`;

const LikeAndDislikeButtons = () => {
  return (
    <ButtonContainer>
      <IconWrapper>
        <DislikedIcon className="material-icons">clear</DislikedIcon>
      </IconWrapper>
      <IconWrapper>
        <LikedIcon className="material-icons">done</LikedIcon>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default LikeAndDislikeButtons;
