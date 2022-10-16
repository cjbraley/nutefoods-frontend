import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const animationDuration = 0.75;

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHidden, setIsHidden] = useState(false);

    // turn loader off after interval
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 20);

        setTimeout(() => {
            setIsHidden(true);
        }, animationDuration * 1000 + 20);
    });

    return (
        <>
            {isLoading && (
                <Helmet>
                    <body className="preventScroll" />
                </Helmet>
            )}
            {!isHidden && <Loader className={`${isLoading ? "" : "loaded"}`} />}
        </>
    );
};

const Loader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${props => props.theme.color.primary};
    z-index: 999;
    transition: all ${animationDuration}s ease;

    &.loaded {
        background: none;
    }
`;

export default Layout;
