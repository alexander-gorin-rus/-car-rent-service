import React from 'react';
import { ListContainer, NavItem } from './styles';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../containers/responsive';
import menuStyles from './menuStyles';

const NavItems = () => {
    const isMobile = useMediaQuery({maxWidth: SCREEN.sm});
    if (isMobile) 
    return (
        <Menu right styles={menuStyles}>
            <ListContainer>
                <NavItem menu>
                    <a href='#'>Home</a>
                </NavItem>
                <NavItem menu>
                    <a href='/cars'>Cars</a>
                </NavItem>
                <NavItem menu>
                    <a href='/servies'>Services</a>
                </NavItem>
                <NavItem menu>
                    <a href='/contacts'>Contact Us</a>
                </NavItem>
            </ListContainer>
        </Menu>
      );

return (
    <ListContainer>
        <NavItem>
            <a style={{'textDecoration': 'none'}} href='#'>Home</a>
        </NavItem>
        <NavItem>
            <a href='/cars'>Cars</a>
        </NavItem>
        <NavItem>
            <a href='/servies'>Services</a>
        </NavItem>
        <NavItem>
            <a href='/contacts'>Contact Us</a>
        </NavItem>
    </ListContainer>
  )
}

export default NavItems