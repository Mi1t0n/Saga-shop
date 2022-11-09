import {createGlobalStyle} from "styled-components";

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