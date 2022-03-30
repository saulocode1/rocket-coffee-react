import styled from "styled-components";

const CircleBackground = styled.div`
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    z-index: ${(props) => props.index};
    width: 6.25rem;
    max-width: 6.25rem;
    height: 6.25rem;
    max-height: 6.25rem;
    zoom: 2000%;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        var(--first-color) 0%,
        var(--dark-color) 30%
    );


    opacity: 0.48;

    @media (min-width: 1200px) {
        display: ${(props) => props.display};
    }
`;

export const CircleBackgroundDesktop = styled.div`
    display: none;

    @media (min-width: 1200px) {
        display: flex;
        position: absolute;
        bottom: ${(props) => props.bottom};
        right: ${(props) => props.right};
        z-index: ${(props) => props.index};
        width: 6.25rem;
        height: 6.25rem;
        zoom: 2000%;
        border-radius: 50%;
        background: radial-gradient(
            circle,
            var(--first-color) 0%,
            var(--dark-color) 30%
        );

        opacity: 0.48;
    }
`;

export default CircleBackground;
