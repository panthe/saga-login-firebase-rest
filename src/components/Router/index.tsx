import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';

import * as ROUTES from '../../config/routes';

import { Container, Row, Col } from 'reactstrap';
import {Provider} from "react-redux";
import store from "../../store/configureStore";
import {actionSignIn} from "../../store";
const App = (): JSX.Element => {
  return ( <Provider store={store()}>
    <Router>
      <Container>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>

            <Route exact path={ROUTES.LANDING_PAGE} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP_PAGE} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN_PAGE} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET_PAGE} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME_PAGE} component={HomePage} />

      </Container>
    </Router>
      </Provider>
  );
};

export default App;
