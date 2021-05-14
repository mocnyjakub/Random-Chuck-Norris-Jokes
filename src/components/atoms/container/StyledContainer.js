import styled from "styled-components";

export const ContainerWrapper = styled.div`
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.dark};
  background-color: #f5f6f8;
  padding: 18px 0;
  font-size: 16px;
  flex: ${({ saveBtn }) => (saveBtn ? 2 : 1)};
  margin-left: ${({ saveBtn }) => (saveBtn ? `8px` : 0)};
`;
