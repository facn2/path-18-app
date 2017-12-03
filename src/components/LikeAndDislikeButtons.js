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
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid gainsboro;
  width: 4rem;
  height: 4rem;
`;

const LikedIcon = styled(Icon)`
  color: #26a69a;
`;

const DislikedIcon = styled(Icon)`
  color: #d32f2f;
`;

const LikeAndDislikeButtons = ({ throwCard }) => {
  return (
    <ButtonContainer>
      <IconWrapper>
        <DislikedIcon
          className="material-icons"
          onClick={() => throwCard('left')}
        >
          clear
        </DislikedIcon>
      </IconWrapper>
      <IconWrapper>
        <LikedIcon
          className="material-icons"
          onClick={() => throwCard('right')}
        >
          done
        </LikedIcon>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default LikeAndDislikeButtons;
