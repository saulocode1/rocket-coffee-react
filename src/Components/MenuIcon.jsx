import styled from "styled-components";
import MenuImg from "../assets/icons/menu-icon.svg";

const MenuIcon = styled.img.attrs({ src: MenuImg })`
    cursor: pointer;
    padding: 0.9375rem 0.9375rem;
    @media (min-width: 1200px) {
        display: none;
    }
`;

export default MenuIcon;