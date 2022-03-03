import styled from "styled-components";
// import MenuImg from "../assets/icons/menu-icon.svg";
// import xIcon from "../assets/icons/x-icon.svg";

const MenuIcon = styled.img.attrs(props => ({}))`
    cursor: pointer;
    padding: 0.9375rem;
    padding-right: 1.5625rem;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export default MenuIcon;
