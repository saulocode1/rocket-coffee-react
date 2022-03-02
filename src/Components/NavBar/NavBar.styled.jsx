import styled from "styled-components";

const NavBar = styled.nav`
    display: none;

    @media (min-width: 1200px) {
        width: 27rem;
        max-width: 27rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default NavBar;
