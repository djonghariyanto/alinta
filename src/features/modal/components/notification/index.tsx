import * as React from 'react';

import { useDispatch } from '../../../../store';
import { closeModal } from '../../slice';
import { StyledBase, StyledHeader, StyledContent } from '../../styled';
import { StyledPrimaryButton } from '../../../../common/styled/buttons';
import { StyledPrimaryText, StyledSecondaryText } from '../../../../common/styled/texts';

export interface Props {
  children: React.ReactNode
}

const NotificationModal: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <StyledBase>
      <StyledHeader>
        <StyledPrimaryText>
          Notification
        </StyledPrimaryText>
      </StyledHeader>
      <StyledContent>
        <StyledSecondaryText>
          {children}
        </StyledSecondaryText>
      </StyledContent>
      <StyledContent>
        <StyledPrimaryButton
          onClick={() => dispatch(closeModal())}
        >
          Ok
        </StyledPrimaryButton>
      </StyledContent>
    </StyledBase>
  );
};

export default NotificationModal;
