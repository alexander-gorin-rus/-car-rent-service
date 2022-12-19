import React from 'react'
import { Image, LogoContainer, LogoText } from './styles'
import CarLogoImg from '../../assets/images/carLogo.png';

const Logo = () => {
  return (
    <LogoContainer>
        <Image>
            <img src={CarLogoImg} alt='car logo' />
        </Image>
        <LogoText>KazCarService</LogoText>
    </LogoContainer>
  )
}

export default Logo;