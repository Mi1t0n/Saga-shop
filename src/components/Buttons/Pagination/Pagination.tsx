import styled from "styled-components";
import {FC} from "react";
import {IPagination} from "./IPagination";

const Button = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 5px;
  border: 1px black solid;
  cursor: pointer;
`
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
`


const Pagination: FC<IPagination> = ({page, next, prev}) =>
    <Wrapper>
        <Button onClick={prev} data-testid='increase'>&lt;</Button>
        <h3 data-testid='page'>{page}</h3>
        <Button onClick={next} data-testid='decrease'>&gt;</Button>
    </Wrapper>

export default Pagination;
