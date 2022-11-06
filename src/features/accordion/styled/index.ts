import styled from "styled-components";
import Accordion from '../component';

export const StyledPrimaryAccordion = styled(Accordion)`
  width: 100%;
  padding-block: 24px;

  &.--hidden {
    display: none;
  }
`;

