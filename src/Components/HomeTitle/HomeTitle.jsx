import React from "react";
import { PurpleTitle, WhiteTitle } from "../HomeTitle/HomeTitle.styled";

const HomeTitle = () => {
    return (
        <>
            <WhiteTitle>GreatCoffee</WhiteTitle>
            <PurpleTitle>
                {"<"}GreatCode{"/>"}
            </PurpleTitle>
        </>
    );
};

export default HomeTitle;
