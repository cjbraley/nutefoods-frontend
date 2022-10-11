const theme = {
    breakpoint: {
        tablet: "650px",
        desktop: "1275px",
        desktopWide: "1500px",
        footerDisplayMinHeight: "1050px",
    },
    color: {
        primary: "#383b23",
        secondary: "#d8c7ae",
        three: "#f4f0d8",
        four: "#96734a",

        primaryHover: "#4c4f39",
        secondaryHover: "#c3b49e",
        threeHover: "#dcd8c2",
        fourHover: "#876843",

        primaryHoverText: "#60624f",
        secondaryHoverText: "#c3b49e",
        threeHoverText: "#dcd8c2",
        fourHoverText: "#876843",
    },
    font: {
        family: {
            primary: "NHaasGrotesk",
            secondary: "Nib",
        },
        size: {
            xs: "0.75rem",
            s: "0.875rem",
            m: "1rem",
            l: "1.125rem",
            xl: "1.25rem",
            xxl: "1.5rem",
            xxxl: "1.75rem",
        },
    },
    spacing: {
        xs: "0.25rem",
        s: "0.5rem",
        m: "1rem",
        l: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
    },
    position: {
        navHeight: "3.5rem",
        footerHeight: "8.75rem",
        contentHeight: "calc(100vh - 3.5rem - 8.75rem - 5px)",
        pageTitleHeight: "8rem",
        contentPadding: "1rem",
    },
};

export default theme;
