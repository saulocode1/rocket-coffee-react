import styled from "styled-components";

const MenuDiv = styled.div`
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    opacity: ${(props) => props.opacity};
    z-index: ${(props) => props.index};
    background-color: var(--dark-color);
    pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
    transition: opacity 200ms linear, z-index 200ms linear;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export default MenuDiv;