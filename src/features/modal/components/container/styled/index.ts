import styled from "styled-components";

export const StyledBase = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledContent = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;
