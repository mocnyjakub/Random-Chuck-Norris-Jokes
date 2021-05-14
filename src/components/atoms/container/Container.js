import React from "react";
import { ContainerWrapper } from "./StyledContainer";

const Container = ({ children, saveBtn }) => {
  return <ContainerWrapper saveBtn={saveBtn}>{children}</ContainerWrapper>;
};

export default Container;
