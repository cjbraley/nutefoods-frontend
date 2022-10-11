import React from "react";
import styled from "styled-components";
import LogoIcon from "../../assets/icons/logo.svg";

const Logo = ({ $alt = false }) => {
    return (
        <Wrapper $alt={$alt}>
            <LogoIcon className="logo" />
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.div`
    .logo {
        cursor: pointer;
        width: auto;
        stroke: none;
        fill: ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        transform: translateY(2px);
    }
`;
