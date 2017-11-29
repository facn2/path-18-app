import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.i`
  font-size: 2rem;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid gainsboro;
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
