import React from 'react';
import { PropsFromState } from './'

import * as ROUTES from '../../config/routes';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

type IProps = PropsFromState;

const Navigation = (props: IProps): JSX.Element => {
  const { auth } = props;
  console.log("Auth",auth);
  return (
    <div>      
      <Nav>
        <NavItem>
          <NavLink tag={Link} to={ROUTES.SIGN_IN_PAGE}>
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={ROUTES.LANDING_PAGE}>
            Landing
          </NavLink>
        </NavItem>
        { auth.isAuthenticated ?
        <NavItem>
          <NavLink tag={Link} to={ROUTES.HOME_PAGE}>
            Home
          </NavLink>
        </NavItem>
        : null }
        { auth.isAuthenticated ?
        <NavItem>
          <NavLink tag={Link} to={ROUTES.USER_PAGE}>
            User
          </NavLink>
        </NavItem>
        : null }
      </Nav>      
    </div>
  );
};

export default Navigation;