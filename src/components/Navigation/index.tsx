import React from 'react';

import * as ROUTES from '../../config/routes';

import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (): JSX.Element => {
  return (
    <div>      
      <Nav>
        <NavItem>
          <NavLink href={ROUTES.SIGN_IN_PAGE}>
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={ROUTES.LANDING_PAGE}>
            Landing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={ROUTES.HOME_PAGE}>
            Home
          </NavLink>
        </NavItem>
      </Nav>      
    </div>
  );
};

export default Navigation;