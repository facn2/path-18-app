import React, { Component } from "react";
import styled from "styled-components";

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
  width: 16rem;
  height: 3rem;
`;

const FacebookIcon = styled.img``;

const FacebookLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <FacebookLoginButton>
          <FacebookLink href="/__/hello/facebook">
            Continue with Facebook
          </FacebookLink>
        </FacebookLoginButton>
      </LoginContainer>
    );
  }
}

export default Login;
