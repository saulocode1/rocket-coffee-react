import React from "react";
import { PurpleTitle, WhiteTitle } from "../HomeTitle/HomeTitle.styled";

const HomeTitle = () => {
    return (
        <>
            <WhiteTitle>Great Coffee</WhiteTitle>
            <PurpleTitle>
                {"<"}Great Code{"/>"}
            </PurpleTitle>
        </>
    );
};

export default HomeTitle;
