import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 555px;
  height: 704px;
  padding: 48px 58px 72px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SaveJokesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* flex: 1; */
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
