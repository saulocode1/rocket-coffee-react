import styled from "styled-components";
import Arrow from "../../assets/icons/arrow.svg";

const Button = styled.button`
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
    margin-bottom: 6.125rem;
    
    
    @media (min-width: 1200px) {
        display: none;
    }
`;

export const ButtonDesktop = styled.button`
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

`;

export default Button;

export const ArrowIcon = styled.img.attrs({ src: Arrow })`
    margin-left: 0.625rem;
`;
