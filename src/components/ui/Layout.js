import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../state/ui";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "../menu/Menu";
import Overlay from "./Overlay";
import SideCart from "./SideCart";

import "../../styles/fonts.css";

const Layout = ({
    children,
    showFooter = true,
    hideFooterMobile = false,
    $alt = false,
    navReturn = false,
    noBackground = false,
    hideCart = false,
}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(setShowMenu(false));
    }, [location, dispatch]);

    const { showMenu, showCart } = useSelector(state => state.ui);

    return (
        <Main $alt={$alt} noBackground={noBackground}>
            <Menu />
            <SideCart />
            <Navbar $alt={$alt} navReturn={navReturn} hideCart={hideCart} />
            <Children>{children}</Children>
            {showFooter && <Footer hideFooterMobile={hideFooterMobile} />}
            {(showCart || showMenu) && <Overlay />}
        </Main>
    );
};

export default Layout;

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-color: ${props =>
        props.noBackground
            ? ""
            : props.$alt
            ? props.theme.color.primary
            : props.theme.color.secondary};

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    }
`;

const Children = styled.div`
    flex-grow: 1;
    max-width: 100%;
    z-index: 1;
`;
