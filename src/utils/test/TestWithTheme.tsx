import React, {ReactNode} from "react";
import {ThemeProvider} from "styled-components";

const theme = {
    media: {
        mobile: '(min-width: 320px) and (max-width: 767px )',
        tablet: '(min-width: 768px)and (max-width: 1439px )',
        laptop: '(min-width: 1440px)',
    }
}

const TestWithTheme = (Component: ReactNode) =>
    <ThemeProvider theme={theme}>
        {Component}
    </ThemeProvider>

export default TestWithTheme