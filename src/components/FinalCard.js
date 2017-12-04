import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FinalCardContainer = styled.div`
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

const FinalCard = () => (
  <FinalCardContainer>
    <Wrapper>
      <IconWrapper>
        <CompleteIcon className="material-icons">thumb_up</CompleteIcon>
      </IconWrapper>
    </Wrapper>
    <Wrapper>
      <WrapperText>
        You have swiped through all the careers. Check out the careers you have
        liked for more details.
      </WrapperText>
      <StyledLink to="/LikedCareers">
        <LikedButton>Liked Careers</LikedButton>
      </StyledLink>
    </Wrapper>
  </FinalCardContainer>
);

export default FinalCard;
