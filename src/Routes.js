import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import NavBar from './components/NavBar';

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  min-height: 25rem;
`;

const Main = () => {
  return (
    <AppWrapper>
      <NavBar />
      <Switch>
        <Route path="/Careers" exact component={Careers} />
        <Route path="/LikedCareers" exact component={LikedCareers} />
        <Route path="/Careers/Details/:title" exact component={CareerDetails} />
      </Switch>
    </AppWrapper>
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
