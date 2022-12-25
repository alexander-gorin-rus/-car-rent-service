import styled from 'styled-components';
import tw from 'twin.macro';
import {SCREEN} from '../responsive';

export const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        
    `}
`;

export const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12

    `}
`;

export const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

export const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        pt-20
    `}
`;

export const Slogan = styled.h1`
    text-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    md:leading-normal
    xl:leading-relaxed
`;

export const Description = styled.span`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

export const BlobContainer = styled.div`
    widht: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media(min-width: ${SCREEN.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media(min-width: ${SCREEN.md}) {
        width: 40em;
        max-height: 10em;
        right: -7em;
        top: -12em;
        transform: rotate(-25deg);
    }
`;

export const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img{
        width: 100%;
        height: auto;
        max-width: fit-content;
    }

    @media(min-width: ${SCREEN.sm}) {
        width: 40em;
        max-height: 10em;
    }

`;
