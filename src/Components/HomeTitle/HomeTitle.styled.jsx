import styled from "styled-components";

export const WhiteTitle = styled.h1`
    font-size: 3.125rem;
    color: var(--light-color);
    font-weight: 700;
    margin-top: 6.25rem;

    @media (min-width: 1200px) {
        font-size: 6rem;
        margin-top: 0rem;
    }
`;

export const PurpleTitle = styled.h1`
    font-size: 3.125rem;
    font-weight: 700;
    text-shadow: -1px -1px 0 var(--first-color), 1px -1px 0 var(--first-color),
        -1px 1px 0 var(--first-color), 1px 1px 0 var(--first-color);

    @media (min-width: 1200px) {
        font-size: 6rem;
    }
`;
