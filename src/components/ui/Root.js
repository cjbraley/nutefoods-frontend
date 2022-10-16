import React, { useState, useEffect } from "react";

import Loader from "./Loader";

import "../../styles/fonts.css";

const Layout = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    // turn loader off after interval
    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 20);
    });

    return (
        <>
            <Loader isMounted={isMounted} />
            {isMounted && children}
        </>
    );
};

export default Layout;
