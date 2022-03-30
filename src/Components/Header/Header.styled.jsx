import styled from "styled-components";

const Header = styled.header`
    height: 5.9688rem;
    max-width: 1360px;
    border-bottom: 1px solid #29292e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5625rem;
    padding-top: 1rem;
    padding-right: 0;

    @media (min-width: 1200px) {
        width: 70vw;
        max-width: 1440px;
        margin: 0 auto;
        margin-top: 3.125rem;
        border-bottom: none;
        justify-content: center;
        margin-bottom: 5rem;
    }
`;

export default Header;
