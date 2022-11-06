import * as React from 'react';

import { StyledBase, StyledContent } from './styled';
import { useSelector } from '../../../../store';
import NotificationModal from '../notification';
import ConfirmationModal from '../confirmation';

const ModalContainer: React.FC = () => {
  const Component = useSelector(
    ({ modal }) => {
      switch (modal.mode) {
        case 'notification': return (
          <NotificationModal>
            {modal.payload?.message}
          </NotificationModal>)
        case 'confirmation': return (
          <ConfirmationModal>
            {modal.payload?.message}
          </ConfirmationModal>)
      }
    }
  );

  return (
    <StyledBase>
      <StyledContent>
        {Component}
      </StyledContent>
    </StyledBase>
  );
};

export default ModalContainer;
