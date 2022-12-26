import React from 'react';
import {ICarProps} from './interfaces';
import {CarContainer,
  CarDetail,
  CarDetailesContainer,
  CarInfo,
  CarName,
  CarThumbnail,
  DailyPrice,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Separator,
  SmallIcon,
  SmallText,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Car = (props: ICarProps) => {
  const {name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas} = props;
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt='car_container' />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>{dailyPrice}<SmallText>/day</SmallText></DailyPrice>
        <MonthlyPrice>{monthlyPrice}<SmallText>/month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailesContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailesContainer>
      <RentButton text='Rent Now' />
    </CarContainer>
  );
};

export default Car;
