import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = ({ children, onClickFn }) => {
  return <Wrapper onClick={onClickFn}>{children}</Wrapper>;
};

export default IconWrapper;
