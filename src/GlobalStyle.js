import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--dark-color);
        font-family: 'Manrope', sans-serif;
        overflow: hidden;
    }

    :root {
        --first-color: #8257E5;
        --dark-color: #000;
        --grey-color: #29292E;
        --light-color: #fff;
    }
`;

export default GlobalStyle;
