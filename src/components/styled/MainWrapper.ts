import styled from "styled-components";

const MainWrapper = styled.main`
  display: grid;
  justify-items: center;
  padding: 20px;
  grid-row-gap: 30px;
  @media ${({theme}) => theme.media.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({theme}) => theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default MainWrapper