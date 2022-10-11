import React from "react";
import styled from "styled-components";

const Button = ({ children, color = "primary", classes, type = "", onClick }) => {
    return (
        <StyledButton
            type={type}
            color={color}
            className={`${classes} button-text`}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 0.75rem 1rem;
    width: 100%;
    font-family: Nib, sans-serif; /* border-radius: 0.125rem; */

    &.disabled {
        opacity: 0.8;
        a {
            pointer-events: none;
        }
    }

    ${props =>
        props.color === "primary"
            ? `background-color: ${props.theme.color.primary}; color: ${props.theme.color.three}`
            : ""};

    ${props =>
        props.color === "four"
            ? `background-color: ${props.theme.color.four}; color: ${props.theme.color.three}`
            : ""};

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            ${props =>
                props.color === "primary"
                    ? `background-color: ${props.theme.color.primaryHover};`
                    : ""};

            ${props =>
                props.color === "four" ? `background-color: ${props.theme.color.fourHover};` : ""};
        }
    }
`;
