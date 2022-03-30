import React from "react";
import MenuDiv from "./Menu.styled";
import MenuLink from "./MenuLink/MenuLink.styled";

const Menu = (props) => {
    return (
        <>
            <MenuDiv opacity={props.opacity} index={props.index} height={props.height}>
                <MenuLink>Home</MenuLink>
                <MenuLink>Menu</MenuLink>
                <MenuLink>Recompensas</MenuLink>
                <MenuLink>Gift Cards</MenuLink>
                <MenuLink>Lojas</MenuLink>
            </MenuDiv>
        </>
    );
};

export default Menu;
