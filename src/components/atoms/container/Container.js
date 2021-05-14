import React from "react";
import { ContainerWrapper } from "./StyledContainer";

const Container = ({ children, saveBtn, errorStyles }) => {
  return (
    <ContainerWrapper errorStyles={errorStyles} saveBtn={saveBtn}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
