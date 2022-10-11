import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setShowMenu, setShowCart } from "../../state/ui";

const Overlay = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setShowMenu(false));
        dispatch(setShowCart(false));
    };

    return <StyledOverlay onClick={handleClick} onKeyDown={handleClick} />;
};

export default Overlay;

const StyledOverlay = styled.div`
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        display: block;
    }
`;
