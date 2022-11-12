import {MemoryRouter} from "react-router-dom";
import {ReactNode} from "react";
import RouteLocationTest from "./RouteLocationTest";

const testWithRouter = (Component: ReactNode,initialEntries:string[] = ['']) =>
    <MemoryRouter initialEntries={initialEntries}>
        {Component}
        <RouteLocationTest/>
    </MemoryRouter>

export default testWithRouter