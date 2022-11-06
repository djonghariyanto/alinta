import * as React from 'react';

import { useDispatch } from '../../../../store';
import { closeModal, CLOSE_OK_STATUS } from '../../slice';
import { StyledBase, StyledHeader, StyledContent } from '../../styled';
import { StyledPrimaryButton, StyledFlatButton } from '../../../../common/styled/buttons';
import { StyledPrimaryText, StyledSecondaryText } from '../../../../common/styled/texts';
import { StyledMediumGap } from '../../../../common/styled/gaps';
import { StyledFlex } from '../../../../common/styled/displays';

export interface Props {
  children: React.ReactNode
}

const ConfirmationModal: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <StyledBase>
      <StyledHeader>
        <StyledPrimaryText>
          Confirmation
        </StyledPrimaryText>
      </StyledHeader>
      <StyledContent>
        <StyledSecondaryText>
          {children}
        </StyledSecondaryText>
      </StyledContent>
      <StyledContent>
        <StyledFlex>
          <StyledFlatButton
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </StyledFlatButton>
          <StyledMediumGap>
            <StyledPrimaryButton
              onClick={() => dispatch(closeModal(CLOSE_OK_STATUS))}
            >
              Ok
            </StyledPrimaryButton>
          </StyledMediumGap>
        </StyledFlex>
      </StyledContent>
    </StyledBase>
  );
};

export default ConfirmationModal;
