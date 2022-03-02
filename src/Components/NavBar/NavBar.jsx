import React from "react";
import NavBar from "../NavBar/NavBar.styled"
import NavLink from "../NavBar/NavLink"

const NavBarComponent = () => {
    return (
        <>
            <NavBar>
                <NavLink>Home</NavLink>
                <NavLink>Menu</NavLink>
                <NavLink>Recompensas</NavLink>
                <NavLink>Gift Cards</NavLink>
                <NavLink>Lojas</NavLink>
            </NavBar>
        </>
    )
}

export default NavBarComponent;