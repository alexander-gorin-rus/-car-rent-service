import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterContainer = styled.div`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-7
    pb-1
    items-center
    justify-center
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
    flex
    min-w-full
    w-full
    h-full
    max-w-screen-2xl
    w-full
  `}
`;

export const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-7
  `}
`;

export const AboutText = styled.span`
  ${tw`
    text-white
    text-sm
    font-normal
    mt-2
    ml-2
    max-w-xs
    leading-5
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

export const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

export const ListItem = styled.li`

  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-sm
      text-white
    `}
  }
`;

export const HeaderTitle = styled.h3`
  ${tw`
    text-base
    font-bold
    text-white
    mb-3
  `}
`;
