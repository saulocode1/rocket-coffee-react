import styled from "styled-components";
import MenuImg from "../assets/icons/menu-icon.svg";

const MenuIcon = styled.img.attrs({ src: MenuImg })`
    @media (min-width: 1200px) {
        display: none;
    }
`;

export default MenuIcon;