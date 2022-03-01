import React from "react";
import HomeButton from "../Components/HomeButton/HomeButton";
import HomeTitle from "../Components/HomeTitle/HomeTitle";
import HomeSection, { CircleBackground, HomeImage, MainTitle, TitleDiv } from "./Home.styled";

const Home = () => {
    return (
        <>
            <HomeSection>
                <TitleDiv>
                    <MainTitle>
                        O café que fará seu código decolar para o próximo nível.
                    </MainTitle>
                </TitleDiv>
                <HomeButton/>
                <HomeTitle/>
                <HomeImage/>
                <CircleBackground/>
            </HomeSection>

        </>
    );
};

export default Home;
