import React from 'react';
import {Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepTitle,
  StepsContainer,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCarSide, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {Title} from '../../common-styles';

const BookingSteps = () => (
  <Container>
    <Title>
        Our working steps
    </Title>
    <StepsContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </StepIcon>
        </Step>
        <StepTitle>
            Choose location
        </StepTitle>
        <StepDescription>
            Find the nearest location and book your car.
        </StepDescription>
      </StepContainer>
    </StepsContainer>
    <StepsContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </StepIcon>
        </Step>
        <StepTitle>
            Pick-Up Date
        </StepTitle>
        <StepDescription>
            Pick up the best day for your to rent a car
        </StepDescription>
      </StepContainer>
    </StepsContainer>
    <StepsContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faCarSide} />
          </StepIcon>
        </Step>
        <StepTitle>
            Book Your Car
        </StepTitle>
        <StepDescription>
            Book your car with a single click
        </StepDescription>
      </StepContainer>
    </StepsContainer>
  </Container>
);

export default BookingSteps;
