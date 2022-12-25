import React from 'react';
import {BlobContainer, Description, LeftContainer, RightContainer, Slogan, StandaloneCar, TopSectionContainer} from './styles';
import MersImg from '../../assets/images/mers500.png';
import BlobImg from '../../assets/images/blob.svg';
import Button from '../../components/button';
import {ButtonsContainer} from '../../components/button/styles';

const TopSection = () => (
  <TopSectionContainer>
    <LeftContainer>
      <Slogan>
          Rent your car
      </Slogan>
      <Description>
          We are the only the best car rent company
      </Description>
      <ButtonsContainer>
        <Button text='Book Your Ride' />
        <Button theme='filled' text='Sell Your Car' />
      </ButtonsContainer>
    </LeftContainer>
    <RightContainer>
      <BlobContainer>
        <img src={BlobImg} />
      </BlobContainer>
      <StandaloneCar>
        <img src={MersImg} />
      </StandaloneCar>
    </RightContainer>
  </TopSectionContainer>
);

export default TopSection;
