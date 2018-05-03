import React from 'react';
import styled from 'styled-components';
import T from 'i18n-react';

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
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 0 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #455a64;
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
        <T.text text={{ key: '/careers.endDescription' }} />
      </WrapperText>
    </Wrapper>
  </FinalCardContainer>
);

export default FinalCard;
