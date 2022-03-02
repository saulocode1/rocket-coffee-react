import styled from "styled-components";

const CircleBackground = styled.div`
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    z-index: ${(props) => props.index};
    width: 2245px;
    height: 2245px;
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
        width: 2245px;
        height: 2245px;
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
