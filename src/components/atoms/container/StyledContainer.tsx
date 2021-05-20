import styled, { css } from "styled-components";
import breakpoints from "../../../breakpoints";

interface ContainerWrapperProps {
  saveBtn:boolean | undefined;
  errorStyles:boolean | undefined;
  focusStyles:boolean | undefined;
}

export const ContainerWrapper = styled.div<ContainerWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ saveBtn }) => (saveBtn ? "center" : `space-evenly`)};
  border-radius: 6px;
  color: ${({ focusStyles }) => (focusStyles ? "#fff" : "#34394f")};
  background-color: ${({ errorStyles }) =>
    errorStyles ? "#f39a9a" : "#f5f6f8"};
  background-color: ${({ focusStyles }) => focusStyles && "#34394f"};
  padding: 18px 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
  flex: ${({ saveBtn }) => (saveBtn ? 2 : 1)};
  margin-left: ${({ saveBtn }) => (saveBtn ? `8px` : 0)};
  cursor: ${({ saveBtn }) => saveBtn && "pointer"};
  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;
  ${({ errorStyles }) =>
    errorStyles &&
    css`
      &::after {
        content: "You can pick a number from 1 to 100.";
        display: block;
        width: calc(100%-106);
        position: absolute;
        bottom: 5%;
        left: 10%;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.redError};
      }
    `}
  ${breakpoints.mobile} {
    &::after {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      left: 4vw;
      bottom: 0.8vh;
    }
  }
`;
