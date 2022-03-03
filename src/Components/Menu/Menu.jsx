import styled from "styled-components";

const Menu = styled.div`
    position: absolute;
    top: 10vh;
    width: 100px;
    height: 100px;
    background-color: #fff;
    opacity: ${(props) => props.opacity};
    transition: opacity 300ms ease-in;
`;

export default Menu;
