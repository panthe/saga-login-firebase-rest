import React from 'react';
import { PropsFromState } from '.'
import {  
  Route,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import  { history } from '../../store/configureStore';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutPage from '../SignOut';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import UserPage from '../User';

import * as ROUTES from '../../config/routes';

import { Container, Row, Col } from 'reactstrap';
import Unauthorized from '../Unauthorized';

type IProps = PropsFromState;

const AppRouter = (props: IProps): JSX.Element => {
  const { auth } = props;
  console.log(props);
  return (  
      <ConnectedRouter history={history}>
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
          { auth.isAuthenticated ?
            <Route path={ROUTES.USER_PAGE} component={UserPage} />            
            : 
            <Route path={ROUTES.USER_PAGE} component={Unauthorized} />
          }
          <Route path={ROUTES.SIGN_OUT_PAGE} component={SignOutPage} />
          
        </Container>
      </ConnectedRouter>   

  );
};



export default AppRouter;