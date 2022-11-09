import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/rootStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from 'components/styled/Global'
import {ThemeProvider} from "styled-components";

require('./mocks/browser')
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const theme = {
    media: {
        mobile: '(min-width: 320px) and (max-width: 767px )',
        tablet: '(min-width: 768px)and (max-width: 1439px )',
        laptop: '(min-width: 1440px)',
    }
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <GlobalStyles/>
                    <App/>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
