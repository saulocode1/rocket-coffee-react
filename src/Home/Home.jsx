import React from "react";
import HomeButton from "../Components/HomeButton/HomeButton";
import HomeTitle from "../Components/HomeTitle/HomeTitle";
import CircleBackground, {
    CircleBackgroundDesktop,
} from "../Components/CircleBackground";
import HomeSection, {
    HomeBlur,
    HomeImage,
    ImageWrapper,
    MainTitle,
    TitleDiv,
} from "./Home.styled";

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
                <ImageWrapper>
                    <HomeImage />
                    <HomeBlur />
                </ImageWrapper>
                {/* <CircleBackground
                    bottom="-2.7rem"
                    index="-1"
                    display="none"
                /> */}
                <CircleBackgroundDesktop
                    bottom="-3rem"
                    right="40px"
                    index="-1"
                    display="flex"
                />
                <CircleBackgroundDesktop
                    bottom="-4px"
                    right="-45px"
                    index="-1"
                    display="flex"
                />
            </HomeSection>
        </>
    );
};

export default Home;
