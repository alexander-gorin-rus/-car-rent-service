import styled from 'styled-components';
import tw from 'twin.macro';
import {SCREEN} from '../responsive';

export const AbountUsContainer = styled.div`
border: 1px solid red;
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    pt-4
    pb-4
    pl-7
    pr-7
    md:pl-0
    md:pr-0
    bg-white
  `}
`;

export const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

    img {
      widht: auto;
      height: 100%;
    }
    @media(min-width: ${SCREEN.md}){
      height: 28em;
    }

    @media(min-width: ${SCREEN.lg}){
      height: 30em;
    }

    @media(min-width: ${SCREEN['2xl']}){
      height: 35em;
      margin-left: 0;
    }
`;

export const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

export const InfoText = styled.p`
  ${tw`
    text-sm
    text-gray-600
    md:text-base
    max-w-2xl
    mt-4
    font-normal
  `}
`;
