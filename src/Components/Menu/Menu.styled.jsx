import styled from "styled-components";

const MenuDiv = styled.div`
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    z-index: 1;
    background-color: var(--dark-color);
    opacity: ${(props) => props.opacity};
    transition: opacity 200ms ease-in;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export default MenuDiv;