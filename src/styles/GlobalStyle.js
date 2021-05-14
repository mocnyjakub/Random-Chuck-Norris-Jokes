import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }
  
  a, button {
    font-family: 'Inter', sans-serif;
  }
  h1,h2,h3,h4,p{
    margin:0;
  }

`;
