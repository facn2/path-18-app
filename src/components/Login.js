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

class Login extends Component {
  fbLogin() {}
  render() {
    return (
      <LoginContainer>
        <a href="/__/hello/facebook">Login</a>
      </LoginContainer>
    );
  }
}

export default Login;
