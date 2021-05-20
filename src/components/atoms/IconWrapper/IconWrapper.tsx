import React, { FC } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IconWrapperProps {
  children: React.ReactNode;
  onClickFn : ()=>void;
}

const IconWrapper:FC<IconWrapperProps> = ({ children, onClickFn }) => {
  return <Wrapper onClick={onClickFn}>{children}</Wrapper>;
};

export default IconWrapper;
