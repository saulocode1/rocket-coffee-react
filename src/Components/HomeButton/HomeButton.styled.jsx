import styled from "styled-components";
import Arrow from "../../assets/icons/arrow.svg";
import Coffee from "../../assets/icons/coffee.svg";

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.875rem;
    border-radius: 0.375rem;
    border: 1px solid var(--first-color);
    background-color: transparent;
    color: var(--light-color);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.6875rem;
    cursor: pointer;

    @media (min-width: 1200px) {
        display: none;
        margin-bottom: 0rem;
    }

    @media (min-width: 1200px) {
        display: none;

        align-items: center;
        justify-content: center;
        padding: 0.6875rem 2.375rem;
        border-radius: 0.375rem;
        border: 1px solid var(--first-color);
        background-color: transparent;
        color: var(--light-color);
        text-transform: uppercase;
        font-weight: 800;
        font-size: 0.6875rem;
        cursor: pointer;
        margin-left: 8.1875rem;
    }

    transition: all 0.2s linear 0s;

    &:before {
        content: url(${Coffee});
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0.125rem;
        opacity: 0;
        height: 100%;
        width: 2.3rem;
        transition: all 0.2s linear 0s;
    }

    &:hover {
        text-indent: -0.625rem;
        padding-right: 2.5rem;

        &:before {
            opacity: 1;
            text-indent: 0px;
        }
    }
`;

export const ButtonDesktop = styled.button`
    display: none;
    position: relative;

    @media (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.6875rem 2.375rem;
        border-radius: 0.375rem;
        border: 1px solid var(--first-color);
        background-color: transparent;
        color: var(--light-color);
        text-transform: uppercase;
        font-weight: 800;
        font-size: 0.6875rem;
        cursor: pointer;
        margin-left: 8.1875rem;
    }

    transition: all 0.2s linear 0s;

    &:before {
        content: url(${Coffee});
        /* font-family: FontAwesome; */
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0.125rem;
        opacity: 0;
        height: 100%;
        width: 3rem;
        transition: all 0.2s linear 0s;
    }

    &:hover {
        text-indent: -0.625rem;
        padding-right: 3rem;

        &:before {
            opacity: 1;
            text-indent: 0px;
        }
    }
`;

export default Button;

export const ArrowIcon = styled.img.attrs({ src: Arrow })`
    margin-left: 0.625rem;
`;
