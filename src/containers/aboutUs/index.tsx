import React from 'react';
import {AbountUsContainer, CarContainer, InfoContainer, InfoText, Title} from './styles';
import LandCruiser from '../../assets/images/land-cruiser200.png';

const AbountUs = () => (
  <AbountUsContainer>
    <CarContainer>
      <img src={LandCruiser} alt='car_image' />
    </CarContainer>
    <InfoContainer>
      <Title>
        Fell The Best Experience with Our Rental Deals
      </Title>
      <InfoText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate
      </InfoText>
    </InfoContainer>
  </AbountUsContainer>
);

export default AbountUs;
