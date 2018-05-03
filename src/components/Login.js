import React, { Component } from 'react';
import styled from 'styled-components';
import facebookLogo from '../assets/FB-f-Logo__white_29.png';
import T from 'i18n-react';

const LoginContainer = styled.section`
  background-color: whitesmoke;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const FacebookLoginButton = styled.button`
  background-color: #3b5998;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 3rem;
`;

const FacebookIcon = styled.img`
  padding-left: 0.5rem;
  user-select: none;
`;

const FacebookLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const TitleSection = styled.div`
  color: #26a69a;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Tagline = styled.h3`
  color: #455a64;
  text-align: center;
  padding-top: 1rem;
`;

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <TitleSection>
          <Title>Path 18</Title>
          <Tagline>Find your perfect career path...</Tagline>
        </TitleSection>
        <FacebookLoginButton>
          <FacebookLink href="/__/hello/facebook">
            <T.text text={{ key: 'Login' }} />
          </FacebookLink>
          <FacebookIcon src={facebookLogo} />
        </FacebookLoginButton>
      </LoginContainer>
    );
  }
}

export default Login;
