import styled from "styled-components";

export const StyledTable = styled.table`
  margin-top: 12px;
  border-spacing: 0;
  border-collapse: seperate;
  table-layout: fixed;
  width: 100%;
  --small-gap-left: 8px;
  --small-gap-right: 8px;
`;

export const StyledHead = styled.th`
  width: 25%;
`;

export const StyledRow = styled.tr`
  padding: 12px 0;
  border-bottom: 1.5px solid #ddd;
  display: flex;
`;

export const StyledField = styled.td`
  width: 25%;
`;

