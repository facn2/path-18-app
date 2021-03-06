import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Careers from './containers/Careers.js';
import LikedCareers from './containers/LikedCareers.js';
import CareerDetails from './containers/CareerDetails.js';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ErrorComponent from './components/Error';
import GradeForm from './components/GradeForm';
import T from 'i18n-react';
import he from './app-languages/hebrew.json';
import ar from './app-languages/arabic.json';

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  min-height: 25rem;
  max-width: 25rem;
  margin: 0 auto;
  position: relative;
`;

const Main = props => (
  <AppWrapper>
    <NavBar changeLang={props.changeLang} />
    <Switch>
      <Route path="/" exact component={Login} />
      <Route
        path="/careers"
        exact
        component={() => <Careers currentLang={props.currentLang} />}
      />
      <Route
        path="/careers/liked"
        exact
        component={() => (
          <LikedCareers currentLang={props.currentLang} {...props} />
        )}
      />
      <Route
        path="/career/details/:id"
        exact
        component={routeProps => (
          <CareerDetails currentLang={props.currentLang} {...routeProps} />
        )}
      />
      <Route
        path="/error"
        exact
        component={props => (
          <ErrorComponent
            {...props}
            error={{ code: 404, message: 'Not Found' }}
          />
        )}
      />
      <Route
        component={() => (
          <ErrorComponent error={{ code: 404, message: 'Not Found' }} />
        )}
      />
    </Switch>
  </AppWrapper>
);

const LoginOnly = () => (
  <AppWrapper>
    <Route path="/" exact component={Login} />
  </AppWrapper>
);

const GradeFormOnly = () => (
  <AppWrapper>
    <Route path="/user/grades" exact component={GradeForm} />
  </AppWrapper>
);

class Routes extends Component {
  state = {
    currentLanguage: 'ar',
  };

  changeLang = chosenLang => {
    document.cookie = `language=${chosenLang}`;
    window.location.reload();
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginOnly} />
          <Route path="/user/grades" exact component={GradeFormOnly} />
          <Route
            path="*"
            component={() => (
              <Main
                changeLang={this.changeLang}
                currentLang={this.state.currentLanguage}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const languages = { ar, he };

    // set the current language
    T.setTexts(languages[this.state.currentLanguage]);

    // checks if a new language was selected
    try {
      document.cookie.split(';').map(cookie => {
        let cookieValue = cookie.split('=')[1];
        if (cookieValue === 'he' || cookieValue === 'ar') {
          if (cookieValue !== this.state.currentLanguage) {
            T.setTexts(languages[cookieValue]);
            this.setState({ currentLanguage: cookieValue });
          }
        }
      });
    } catch (e) {
      document.cookie = 'language=ar';
      this.setState({ currentLanguage: 'ar' });
    }
  }
}

export default Routes;
