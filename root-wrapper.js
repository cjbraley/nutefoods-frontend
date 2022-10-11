import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme/default";
import GlobalStyle from "./src/styles/index";

import { Provider } from "react-redux";
import store from "./src/state/store";


// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {element}
            </ThemeProvider>
        </Provider>
    );
};
