import styled from "styled-components";
import RouterLink from "../Links/RouterLink/RouterLink";
import pagesPaths from "./IHeader";
import CartWithValue from "./CartWithValue/CartWithValue";


const FlexHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px black solid;
`


const Header = () =>
    <FlexHeader>
        <RouterLink linkContent={'Catalog'} to={pagesPaths.Catalog}/>
        <CartWithValue/>
    </FlexHeader>

export default Header;
