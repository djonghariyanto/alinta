import * as React from "react";

import { addCustomer } from "../../features/customer/slice";
import CustomerList from "../../features/customer/components/list";
//import CustomerTable from "../../features/customer/components/table";
import CustomerForm from "../../features/customer/components/form";
import { StyledPrimaryAccordion } from "../../features/accordion/styled";
import { StyledContent, StyledHeader } from "./styled";
import { StyledPrimaryButton } from "../../common/styled/buttons";
import { StyledSmallGap } from "../../common/styled/gaps";
import { StyledFlex } from "../../common/styled/displays";
import { StyledPrimaryText } from "../../common/styled/texts";
import { toggleAccordion } from "../../features/accordion/slice";
import { useDispatch } from '../../store';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const onAddCustomer = React.useCallback((values) =>
    dispatch(addCustomer(values)),
    [dispatch]
  );

  return (
    <>
      <StyledContent>
        <StyledHeader>
          <StyledPrimaryText>
            <StyledPrimaryButton
              onClick={() => dispatch(toggleAccordion("customer-form"))}
            >
              <StyledSmallGap>
                <StyledFlex>
                  Customer
                </StyledFlex>
              </StyledSmallGap>
            </StyledPrimaryButton>
          </StyledPrimaryText>
        </StyledHeader>
        <StyledPrimaryAccordion
          id="customer-form"
          groupId="customer-group"
        >
          <CustomerForm onAddCustomer={onAddCustomer} />
        </StyledPrimaryAccordion>
      </StyledContent>
      <StyledContent>
        <StyledHeader>
          <StyledPrimaryText>
            <StyledPrimaryButton
              onClick={() => dispatch(toggleAccordion("customer-list"))}
            >
              <StyledSmallGap>
                <StyledFlex>
                  List
                </StyledFlex>
              </StyledSmallGap>
            </StyledPrimaryButton>
          </StyledPrimaryText>
        </StyledHeader>
        <StyledPrimaryAccordion
          id="customer-list"
          groupId="customer-group"
        >
          <CustomerList />
        </StyledPrimaryAccordion>
      </StyledContent>
    </>
  );
};

export default Home;
