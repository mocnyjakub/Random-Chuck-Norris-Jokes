import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

const MainLayout = styled.div<{children:React.ReactNode}>`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

interface MainTemplateProps{
  children:React.ReactNode
}

const MainTemplate:FC<MainTemplateProps> = ({ children })=> {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};

export default MainTemplate;
