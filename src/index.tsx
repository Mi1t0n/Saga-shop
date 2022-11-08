import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/rootStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from 'components/styled/Global'
require('./mocks/browser')
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyles/>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
