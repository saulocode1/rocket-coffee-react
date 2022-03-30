import HeaderSection from "./Components/Header/HeaderSection";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home/Home";
import React from "react";

function App() {
    return (
        <>
            <GlobalStyle />
            <HeaderSection />
            <Home/>
        </>
    );
}

export default App;
