import React, { useState } from "react";
import Header from "./Header.styled";
import MenuIcon from "../MenuIcon";
import { LogoDesktop, Logo } from "../Logo";
import NavBarComponent from "../NavBar/NavBar";
import { ButtonDesktop } from "../HomeButton/HomeButton.styled";
import Menu from "../Menu/Menu";

const HeaderSection = () => {
    const [opacity, setOpacity] = useState(true);
    const [index, setIndex] = useState(true);

    function handleClick() {
        setOpacity(!opacity);
        setIndex(!index);
    }
    return (
        <>
            <Header>
                <Logo />
                <LogoDesktop />
                <NavBarComponent />
                <ButtonDesktop>Pegar meu café</ButtonDesktop>
                <MenuIcon onClick={handleClick} />
                <Menu
                    opacity={opacity ? "0" : "1"}
                    index={index ? "-1" : "3"}
                />
            </Header>
        </>
    );
};

export default HeaderSection;
