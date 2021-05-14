import styled from "styled-components";
import breakpoints from "../../../breakpoints";

export const CardWrapper = styled.div`
  max-width: 555px;
  width: 100%;
  height: 704px;
  padding: 48px 58px 72px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${breakpoints.mobile} {
    padding: 0 15px 25px;
    height: 100vh;
  }
`;

export const SaveJokesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* flex: 1; */
`;
