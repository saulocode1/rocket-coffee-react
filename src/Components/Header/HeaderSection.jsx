import React from "react";
import Header from "./Header.styled";
import Logo from "../Logo";
import Menu from "../MenuIcon";

const HeaderSection = () => {
    return (
        <>
            <Header>
                <Logo />
                <Menu />
            </Header>
        </>
    );
};

export default HeaderSection;
