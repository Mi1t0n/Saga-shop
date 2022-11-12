import styled from "styled-components";
import {FC, useEffect, useState} from "react";
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


const Pagination: FC<IPagination> = ({getPage,maxPage}) => {
    const [page, changePage] = useState<number>(1)

    useEffect(() => {
        getPage(page)
    }, [page])

    const increase = () => page < maxPage && changePage(page + 1)
    const decrease = () => page > 1 && changePage(page - 1)

    return (
        <Wrapper>
            <Button onClick={decrease} data-testid='decrease'>&lt;</Button>
            <h3 data-testid='page'>{page}</h3>
            <Button onClick={increase} data-testid='increase'>&gt;</Button>
        </Wrapper>
    )
}

export default Pagination;
