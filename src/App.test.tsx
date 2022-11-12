import {render} from "@testing-library/react";
import App from "./App";
import testWithTheme from "./utils/test/TestWithTheme";

jest.mock("./components/Header/Header", () =>
    () => <div data-testid='header'/>)
jest.mock("./components/RoutesPack/RoutesPack", () =>
    () => <div data-testid='routesPack'/>)
describe('App',()=>{
    it('Render without error',()=>{
        const{getByTestId}=render(testWithTheme(<App/>))

        expect(getByTestId('header')).toBeInTheDocument()
        expect(getByTestId('routesPack')).toBeInTheDocument()
    })
})