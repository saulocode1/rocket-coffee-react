import styled from "styled-components";
import Coffee from "../assets/image/coffee.svg";

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
`;

export const TitleDiv = styled.div`
    width: 23.3125rem;
    margin-bottom: 5.5rem;
`;

export const HomeImage = styled.img.attrs({ src: Coffee })`
    width: 31rem;
    position: absolute;
    bottom: 0;
`;

export const CircleBackground = styled.div`
    position: absolute;
    bottom: -1050px;
    z-index: -1;
    width: 2245px;
    height: 2245px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        var(--first-color) 0%,
        var(--dark-color) 30%
    );

    opacity: 0.48;
`;

export default HomeSection;
