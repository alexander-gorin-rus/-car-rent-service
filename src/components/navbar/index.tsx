import React from 'react';
import {LogoContainer, NavbarContainer} from './styles';
import Logo from '../logo';
import NavItems from './NavItems';

const Navbar = () => (
  <NavbarContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <NavItems />
  </NavbarContainer>
);

export default Navbar;
