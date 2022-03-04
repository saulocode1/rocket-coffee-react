import styled from "styled-components";

const MenuLink = styled.a`
    display: block;
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--second-grey-color);
    list-style: none;
    border: 1px solid #29292e;
    padding: 1.0625rem 0rem 0.875rem 1.9375rem;
    cursor: pointer;
    transition: 80ms ease-in-out;

    &:hover {
        border-left: 0.3125rem solid #8257e6;
        transition: 80ms ease-in-out;
        font-weight: 700;
        color: var(--light-color);
    }
`;

export default MenuLink;
