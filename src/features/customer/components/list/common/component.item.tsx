import * as React from "react";

import { StyledBase, StyledContent, StyledHeader, StyledField } from "../styled";
import { StyledSecondaryButton } from "../../../../../common/styled/buttons";
import { StyledInlineFlex } from "../../../../../common/styled/displays";
import { StyledSmallGap } from "../../../../../common/styled/gaps";
import { StyledPrimaryText, StyledSecondaryText } from "../../../../../common/styled/texts";

import toFullDate from "./util.to-full-date";
import { activateConfirmationModal, closeModal } from "../../../../modal/slice";
import { removeCustomer } from "../../../slice";
import { useDispatch, useListener, State } from "../../../../../store";
import type { ICustomer } from "../../../";

export type RemoveCustomer = (guid: string) => void;

type Props = {
  customer: ICustomer;
};

const CustomerItem: React.FC<Props> = ({ customer }) => {
  const dispatch = useDispatch(),
    fullName = `${customer.firstName} ${customer.lastName}`;

  useListener([
    {
      actionCreator: closeModal,
      effect: async (_, listener) => {
        const state = listener.getState() as State;

        if (state.modal.payload?.id !== customer.id || state.modal.closeStatus === 0) return;

        listener.dispatch(removeCustomer(customer.id));
      }
    }
  ]);

  return (
    <StyledBase>
      <StyledHeader>
        {fullName}
      </StyledHeader>
      <StyledContent>
        <StyledField>
          <StyledPrimaryText as="span">
            Phone number: &nbsp;
          </StyledPrimaryText>
          <StyledSecondaryText as="span">
            {customer.phoneNumber}
          </StyledSecondaryText>
        </StyledField>
        <StyledField>
          <StyledPrimaryText as="span">
            Date of Birth: &nbsp;
          </StyledPrimaryText>
          <StyledSecondaryText as="span">
            {toFullDate(customer.dateOfBirth)}
          </StyledSecondaryText>
        </StyledField>
      </StyledContent>
      <StyledContent>
        <StyledInlineFlex>
          <StyledSecondaryButton
            onClick={() => dispatch(activateConfirmationModal({
              id: customer.id,
              message: `${fullName} will be removed from customer. Procceed?`
            }))}
          >
            <StyledSmallGap>
              Delete
            </StyledSmallGap>
          </StyledSecondaryButton>
        </StyledInlineFlex>
      </StyledContent>
    </StyledBase>
  );
};

export default CustomerItem;
