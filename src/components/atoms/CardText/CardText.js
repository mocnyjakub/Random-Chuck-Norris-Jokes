import React from "react";
import styled from "styled-components";

export const StyledP = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
  /* flex: 1; */
`;

const CardText = ({ joke }) => {
  return <StyledP>“{joke}”.</StyledP>;
};

export default CardText;
