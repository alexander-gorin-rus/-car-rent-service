import React from 'react';
import Navbar from '../../components/navbar';
import {PageContainer} from './styles';
import TopSection from './TopSection';
import BookCard from '../../components/bookCard';
import {Marginer} from '../../components/marginer';
import BookingSteps from '../bookingSteps';

const HomePage = () => (
  <PageContainer>
    <Navbar />
    <TopSection />
    <Marginer direction='vertical' margin='4em' />
    <BookCard />
    <Marginer direction='vertical' margin='8em' />
    <BookingSteps />
  </PageContainer>
);

export default HomePage;
