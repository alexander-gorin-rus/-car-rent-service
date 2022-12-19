import styled, { css } from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

export const LogoContainer = styled.div`

`;

export const ListContainer = styled.ul`
    text-decoration: none;
    ${tw`
        flex
        list-none
    `}
`;

export const NavItem = styled.li<{menu?: any}>`
    text-decoration: none;
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-200
        ease-in-out
        hover:text-gray-700
    `}
    ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;
