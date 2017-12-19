import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.section`
  background-color: whitesmoke;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FacebookLoginButton = styled.button`
  background-color: #4267b2;
  width: 10rem;
  height: 3rem;
  color: #fff:
`;

const FacebookIcon = styled.img``;

class Login extends Component {
  fbLogin() {}
  render() {
    return (
      <LoginContainer>
        <FacebookLoginButton>
          <a href="/__/hello/facebook">Continue with Facebook</a>
        </FacebookLoginButton>
      </LoginContainer>
    );
  }
}

export default Login;
