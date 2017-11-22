import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import AddCareer from './containers/AddCareer.js';
import Settings from './components/Settings';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Careers" exact component={Careers} />
      <Route path="/LikedCareers" exact component={LikedCareers} />
      <Route path="/CareerDetails/:title" exact component={CareerDetails} />
      <Route path="/AddCareer" exact component={AddCareer} />
      <Route path="/Settings" exact component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
