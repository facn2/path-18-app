import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import NavBar from './components/NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Careers" exact component={Careers} />
        <Route path="/LikedCareers" exact component={LikedCareers} />
        <Route path="/Careers/Details/:title" exact component={CareerDetails} />
      </Switch>
    </div>
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
