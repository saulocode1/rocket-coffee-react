import styled from "styled-components";
import Coffee from "../assets/image/img-coffee.svg";
import Blur from "../assets/image/blur.svg";

const HomeSection = styled.section`
    width: 100vw;
    max-width: 1360px;
    height: 49.6887rem;
    max-height: 49.6887rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow: hidden; */
    margin-inline: auto;
`;

export const MainTitle = styled.h1`
    font-size: 1.875rem;
    color: var(--light-color);
    font-weight: 600;
    text-align: center;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const TitleDiv = styled.div`
    width: 23.3125rem;
    margin-top: 5.5313rem;
    margin-bottom: 5.5rem;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const HomeImage = styled.img.attrs({ src: Coffee })`
    width: 26.75rem;
    margin-top: 1.5625rem;
    position: absolute;
    bottom: 0;

    @media (min-width: 1200px) {
        width: 60rem;

        bottom: 50px;
    }
`;

// export const HomeBlur = styled.img.attrs({ src: Blur })`
//     /* width: 26.75rem;
//     margin-top: 1.5625rem; */
//     /* position: absolute; */
//     /* bottom: 0; */

//     /* width: 20.0625rem; */
//     z-index: -1;
//     display: flex;
//     width: auto;

//     @media (min-width: 1200px) {
//         display: none;
//     }
// `;

// export const ImageWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 26.75rem;
// `;

export default HomeSection;
