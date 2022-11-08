import styled from "styled-components";
import {media} from './Global'

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  @media ${media.laptop} {
    width: 1440px;
  }
  @media ${media.tablet} {
    width: 768px;
  }
  @media ${media.mobile} {
    width: 320px;
  }
`

export default Container