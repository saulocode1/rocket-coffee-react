import React from "react";
import Header from "./Header.styled";
// import Logo from "../Logo";
import Menu from "../MenuIcon";
import {LogoDesktop, Logo} from "../Logo";
import NavBarComponent from "../NavBar/NavBar";
import Button, { ButtonDesktop } from "../HomeButton/HomeButton.styled";

const HeaderSection = () => {
    return (
        <>
            <Header>
                <Logo />
                <LogoDesktop/>
                <NavBarComponent/>
                <Button>Pegar meu café</Button>
                <Menu />
                <ButtonDesktop>Pegar meu café</ButtonDesktop>
            </Header>
        </>
    );
};

export default HeaderSection;
