import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  @media ${({theme}) => theme.media.laptop} {
    width: 1440px;
  }
  @media ${({theme}) => theme.media.tablet} {
    width: 768px;
  }
  @media ${({theme}) => theme.media.mobile} {
    width: 320px;
  }
`

export default Container