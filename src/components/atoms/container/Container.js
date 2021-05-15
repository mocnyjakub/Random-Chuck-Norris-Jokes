import React from "react";
import { ContainerWrapper } from "./StyledContainer";

const Container = ({
  children,
  saveBtn,
  errorStyles,
  focusStyle,
  createJokesFile,
}) => {
  return (
    <ContainerWrapper
      onClick={createJokesFile}
      errorStyles={errorStyles}
      saveBtn={saveBtn}
      focusStyle={focusStyle}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
