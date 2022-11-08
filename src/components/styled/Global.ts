import {createGlobalStyle} from "styled-components";

 const breakpoints ={
    laptop:1440,
    tablet:768,
    mobile:320,
}

export const media = {
    laptop: `(min-width: ${breakpoints.laptop}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)and (max-width: ${breakpoints.laptop-1}px )`,
    mobile: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet-1}px )`,
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 300;
    src: url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');
  }
  
  * {
    font-family: 'Exo 2', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }
`
export default GlobalStyles