import React, { useContext } from "react";
import styled from "styled-components";
import RootContext from "../../../context";

export const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-style: italic;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
`;

const CardText = () => {
  const context = useContext(RootContext);
  return <StyledP>“{context.joke}”.</StyledP>;
};

export default CardText;
