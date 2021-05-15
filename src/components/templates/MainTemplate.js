import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};

export default MainTemplate;
