import styled from "styled-components";
import {media} from "./Global";

const MainWrapper = styled.main`
  display: grid;
  justify-items: center;
  padding: 20px;
  grid-row-gap: 30px;
  @media ${media.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default MainWrapper