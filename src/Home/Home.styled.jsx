import styled from "styled-components";
import Coffee from "../assets/image/img-coffee.svg";

const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainTitle = styled.h1`
    margin-top: 5.53125rem;
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
    margin-bottom: 5.5rem;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const HomeImage = styled.img.attrs({ src: Coffee })`
    width: 31rem;
    position: absolute;
    bottom: 0;

    @media (min-width: 1200px) {
        width: 60rem;
        /* bottom: 50px; */
    }
`;

export default HomeSection;
