import React, { FC } from "react";
import { ContainerWrapper } from "./StyledContainer";

interface ContainerProps{
  children:React.ReactNode;
  saveBtn?:boolean;
  errorStyles?:boolean;
  focusStyles?:boolean;
  createJokesFile?: ()=> void;
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
