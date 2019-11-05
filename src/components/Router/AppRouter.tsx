import React from 'react';
import { PropsFromState } from '.'

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
import Unauthorized from '../Unauthorized';


type IProps = PropsFromState;

const AppRouter = (props: IProps): JSX.Element => {
  const { auth } = props;

  return (     
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
          { auth.isAuthenticated ?
            <Route path={ROUTES.HOME_PAGE} component={HomePage} />
            : 
            <Route path={ROUTES.HOME_PAGE} component={Unauthorized} />
          }
            
        </Container>
      </Router>    
  );
};



export default AppRouter;