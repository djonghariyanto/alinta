import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  box-sizing: border-box;
  margin: 0 24px;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: 0 0 0.5rem;
  padding: 0;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 16px;
`;

export const StyledError = styled.div`
  position: relative;
  font-size: 12px;
  color: var(--error-color);
  height: 24px;
`;
