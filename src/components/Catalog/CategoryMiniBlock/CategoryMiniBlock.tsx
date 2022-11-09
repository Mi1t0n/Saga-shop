import {FC} from "react";
import {ICategoryMiniBlock} from "./ICategoryMiniBlock";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled(NavLink)`
  overflow: hidden;
  border-radius: 16px;
  position: relative;
`
const Image = styled.img`
  transition: transform .2s;
  &:hover {
    transform: scale(1.1);
  }
`
const Title = styled.h4`
  color: white;
  top: 10px;
  left: 10px;
  position: absolute;
  background-color: black;
  padding: 5px 10px;
  border-radius: 5px;
`

const CategoryMiniBlock: FC<ICategoryMiniBlock> = ({img, title}) =>
    <Container to={`/category/${title.toLowerCase()}`}>
        <Image src={img} loading={"lazy"}/>
        <Title>{title}</Title>
    </Container>


export default CategoryMiniBlock;
