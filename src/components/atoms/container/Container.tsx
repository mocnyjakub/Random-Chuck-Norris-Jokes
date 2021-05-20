import React, { FC } from "react";
import { ContainerWrapper } from "./StyledContainer";

interface ContainerProps{
  children?:React.ReactNode;
  saveBtn?:boolean | undefined;
  errorStyles?:boolean | undefined;
  focusStyles?:boolean | undefined;
  createJokesFile?: ()=> void | undefined;
  className?:string;
  
}

const Container: FC<ContainerProps> = ({
  children,
  saveBtn,
  errorStyles,
  focusStyles,
  createJokesFile,
}) => {
  return (
    <ContainerWrapper
      onClick={createJokesFile}
      errorStyles={errorStyles}
      saveBtn={saveBtn}
      focusStyles={focusStyles}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
