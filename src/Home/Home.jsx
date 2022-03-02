import React from "react";
import HomeButton from "../Components/HomeButton/HomeButton";
import HomeTitle from "../Components/HomeTitle/HomeTitle";
import CircleBackground from "../Components/CircleBackground";
import HomeSection, { HomeImage, MainTitle, TitleDiv } from "./Home.styled";

const Home = () => {
    return (
        <>
            <HomeSection>
                <TitleDiv>
                    <MainTitle>
                        O café que fará seu código decolar para o próximo nível.
                    </MainTitle>
                </TitleDiv>
                <HomeButton />
                <HomeTitle />
                <HomeImage />
                <CircleBackground
                    bottom="-65.625rem"
                    index="-1"
                    display="none"
                />
                <CircleBackground
                    bottom="-67.875rem"
                    right="45.625rem"
                    index="-1"
                    display="flex"
                />
                <CircleBackground
                    bottom="-11rem"
                    right="-66.375rem"
                    index="-1"
                    display="flex"
                />
            </HomeSection>
        </>
    );
};

export default Home;
