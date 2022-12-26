import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../button';

export const CarContainer = styled.div`
  widht:16.5em;
  min-height: 22.2em;
  max-height:25.2em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `}
`;

export const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    widht: 100%;
    height: 100%;
  }
`;

export const CarName = styled.span`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `}
`;

export const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    mt-3
  `}
`;

export const SmallText = styled.p`
  color: inherit;
  ${tw`
    text-xs
    font-thin
  `}
`;

export const DailyPrice = styled.h4`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `}
`;

export const MonthlyPrice = styled.h4`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

export const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    text-sm
    mr-1
  `}
`;

export const CarDetailesContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

export const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

export const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `}
`;

export const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;
