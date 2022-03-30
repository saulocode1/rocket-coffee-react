import styled from "styled-components";

const NavLink = styled.a`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--light-color);
    cursor: pointer;
    transition: all 0.2s linear 0s;

    &:hover {
        color: var(--first-color);
        transition: all 0.2s linear 0s;
    }
`;

export default NavLink;
