import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  background-color: var(--primary-button-bgcolor, var(--default-primary-button-bgcolor));
  border-radius: var(--primary-button-radius, var(--default-primary-button-radius));
  color: var(--primary-button-color, var(--default-primary-button-color));

  @media (hover: hover) {
    &:hover {
      background-color: var(--default-primary-button-hover-bgcolor);
      color: #fff; 
    }
  }
`;

export const StyledSecondaryButton = styled.button`
  background-color: var(--secondary-button-bgcolor, var(--default-secondary-button-bgcolor));
  border-radius: var(--secondary-button-radius, var(--default-secondary-button-radius));
  color: var(--secondary-button-color, var(--default-secondary-button-color));

  @media (hover: hover) {
    &:hover {
      background-color: var(--default-secondary-button-hover-bgcolor);
      color: #fff; 
    }
  }
`;

export const StyledFlatButton = styled.button`
  background-color: unset; 
  border-radius: var(--flat-button-radius, var(--default-flat-button-radius));
  color: var(--flat-button-color, var(--default-flat-button-color));

  @media (hover: hover) {
    &:hover {
      background-color: var(--default-flat-button-hover-bgcolor);
      color: #fff; 
    }
  }
`;

