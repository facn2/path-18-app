import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import NavBar from './components/NavBar';
import Login from './components/Login';

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  min-height: 25rem;
  max-width: 25rem;
  margin: 0 auto;
  position: relative;
`;

const Main = () => {
  return (
    <AppWrapper>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/careers" exact component={Careers} />
        <Route path="/careers/liked" exact component={LikedCareers} />
        <Route path="/career/details/:id" exact component={CareerDetails} />
      </Switch>
    </AppWrapper>
  );
};

const LoginOnly = () => {
  return (
    <AppWrapper>
      <Route path="/" exact component={Login} />
    </AppWrapper>
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginOnly} />
      <Route path="*" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
