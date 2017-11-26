import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import AddCareer from './containers/AddCareer.js';
import Settings from './components/Settings';
import NavBar from './components/NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Careers" exact component={Careers} />
        <Route path="/LikedCareers" exact component={LikedCareers} />
        <Route path="/Careers/Details/:title" exact component={CareerDetails} />
        <Route path="/Settings" exact component={Settings} />
        <Route path="/AddCareer" exact component={AddCareer} />
      </Switch>
    </div>
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Main} />
      {/* <Route path="/AddCareer" exact component={AddCareer} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
