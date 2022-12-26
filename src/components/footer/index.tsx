import React from 'react';
import {AboutContainer, AboutText, FooterContainer, HeaderTitle, InnerContainer, LinksList, ListItem, SectionContainer} from './styles';
import Logo from '../logo';

const Footer = () => (
  <FooterContainer>
    <InnerContainer>
      <AboutContainer>
        <Logo color='white' />
        <AboutText>
          KazCarService is a Car renting service and
          selling company located in Kazakhstan
        </AboutText>
      </AboutContainer>
      <SectionContainer>
        <HeaderTitle>Our Links</HeaderTitle>
        <LinksList>
          <ListItem><a href='/'>Home</a></ListItem>
          <ListItem><a href='/cars'>Cars</a></ListItem>
          <ListItem><a href='/servies'>Services</a></ListItem>
          <ListItem><a href='/contacts'>Contact Us</a></ListItem>
        </LinksList>
      </SectionContainer>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;
