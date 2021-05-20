import { createGlobalStyle } from "styled-components";
import {ThemeType} from './theme'

export const GlobalStyle = createGlobalStyle<{theme:ThemeType}>`
html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color:${({theme})=> theme.colors.bodyBGC};
  }
  
  a, button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
  }

`;
