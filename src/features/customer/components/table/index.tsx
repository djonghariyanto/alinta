import * as React from "react";

import { StyledTable, StyledHead, StyledRow, StyledField } from "./styled";
import { StyledSecondaryButton } from "../../../../common/styled/buttons";
import { StyledInlineFlex } from "../../../../common/styled/displays";
import { StyledSmallGap } from "../../../../common/styled/gaps";
import { StyledSecondaryText } from "../../../../common/styled/texts";

import { activateConfirmationModal, closeModal } from "../../../modal/slice";
import { removeCustomer } from "../../slice";
import { useDispatch, useListener, useSelector, State } from "../../../../store";
import type { ICustomer } from "../..";

export type RemoveCustomer = (guid: string) => void;

type Props = {
  customer: ICustomer;
};

const CustomerTable: React.FC<Props> = ({ customer }) => {
  const dispatch = useDispatch(),
    Rows = useSelector(({ customer }) => customer.map(customer =>
      <StyledRow>
        <StyledField>
          <div>
            {customer.firstName}
          </div>
          <div>
            {customer.lastName}
          </div>
        </StyledField>
        <StyledField>
          {customer.phoneNumber}
        </StyledField>
        <StyledField>
          {customer.dateOfBirth}
        </StyledField>
        <StyledField>
          <StyledInlineFlex>
            <StyledSecondaryButton
              onClick={() => dispatch(activateConfirmationModal({
                id: customer.id,
                message: `${customer.firstName} will be removed from customer. Procceed?`
              }))}
            >
              <StyledSmallGap>
                Delete
              </StyledSmallGap>
            </StyledSecondaryButton>
          </StyledInlineFlex>
        </StyledField>
      </StyledRow>
    ));

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
    <StyledTable>
      <thead>
        <StyledRow>
          <StyledHead>
            Full Name   
          </StyledHead>
          <StyledHead>
            Phone No.
          </StyledHead>
          <StyledHead>
            Date of Birth
          </StyledHead>
        </StyledRow>
      </thead>
      <tbody>
        {Rows}
      </tbody>
    </StyledTable>
  );
};

export default CustomerTable;
