import {NavLink} from "react-router-dom";
import {FC} from "react";
import {IRouterLink} from "./IRouterLink";
import styled from "styled-components";

const Link = styled(NavLink)`

  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 15px 25px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  border-radius: 30px;

  &:visited {
    color: black;
  }

  &:hover {
    color: white;
    background-color: black;
  }

  &.active {
    color: white;
    background-color: black;
  }
`

const RouterLink: FC<IRouterLink> = ({linkContent, to, ...rest}) =>
    <Link to={to} {...rest}>
        {linkContent}
    </Link>


export default RouterLink;
