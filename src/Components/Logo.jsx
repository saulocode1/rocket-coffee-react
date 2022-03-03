import styled from "styled-components";
import LogoIcon from "../assets/icons/logo-mobile.svg";
import LogoDesktopIcon from "../assets/icons/logo-desktop.svg";

export const Logo = styled.img.attrs({ src: LogoIcon })`
    display: flex;
`;

export const LogoButton = styled.button`
    text-decoration: none;
`;

export const LogoDesktop = styled.img.attrs({ src: LogoDesktopIcon })`
    display: none; 

    @media (min-width: 1200px) {
        display: flex;
        margin-right: 8.8125rem;
    }
`;
