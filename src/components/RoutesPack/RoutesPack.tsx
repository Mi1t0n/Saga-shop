import {Route, Routes} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import pagesPaths from "../Header/IHeader";
import Category from "../Category/Category";
import Cart from "../Cart/Cart";
import styled from "styled-components";

const Error404 = styled.div`
  text-align: center;
  font-size: 106px;
  padding: 100px;
`

const RoutesPack = () =>
    <Routes>
        <Route element={<Catalog/>} path={pagesPaths.Catalog}/>
        <Route element={<Category/>} index path={pagesPaths.Category}/>
        <Route element={<Cart/>} index path={pagesPaths.Cart}/>
        <Route element={<Error404>404</Error404>} path={'*'}/>
    </Routes>


export default RoutesPack;
