import React from 'react';
import {Image, LogoContainer, LogoText} from './styles';
import CarLogoImg from '../../assets/images/carLogo.png';
import {ILogoProps} from './interfaces';

const Logo = (props: ILogoProps) => {
  const {color} = props;
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt='car logo' />
      </Image>
      <LogoText color={color || 'dark'}>KazCarService</LogoText>
    </LogoContainer>
  );
};

export default Logo;
