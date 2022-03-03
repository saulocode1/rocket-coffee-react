import React, { useState } from "react";
import Header from "./Header.styled";
import MenuIcon from "../MenuIcon";
import { LogoDesktop, Logo } from "../Logo";
import NavBarComponent from "../NavBar/NavBar";
import { ButtonDesktop } from "../HomeButton/HomeButton.styled";
import Menu from "../Menu/Menu";

const HeaderSection = () => {
    const [opacity, setOpacity] = useState(true);
    const [menu, setMenu] = useState(true);
    return (
        <>
            <Header>
                <Logo />
                <LogoDesktop />
                <NavBarComponent />
                <ButtonDesktop>Pegar meu café</ButtonDesktop>
                <MenuIcon
                    onClick={() => {
                        setOpacity(!opacity);
                        setMenu(!menu);
                    }}
                />
                <Menu opacity={opacity ? "1" : "0"} />
            </Header>
        </>
    );
};

export default HeaderSection;
