import * as React from "react";
import { Field, Formik, FormikHelpers } from "formik";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledError
} from "./styled";

import { StyledPrimaryButton } from "../../../../common/styled/buttons";

import type { Customer } from "../..";
import { useDispatch, useSelector, useListener } from '../../../../store';
import { activateNotificationModal } from '../../../modal/slice';
import { addCustomer } from '../../slice';
import CustomerSchema from './common/schema.customer';

interface Props {
  onAddCustomer: (values: Customer) => void
}

const CustomerForm: React.FC<Props> = ({ onAddCustomer }) => {
  const dispatch = useDispatch(),
    customers = useSelector(({ customer }) => customer),
    validatePhone = React.useCallback(
      (value) => {
        return customers.find(customer => customer.phoneNumber === value)
          ? "Duplicate number, use different number"
          : null
      },
      [customers]
    );

  useListener({
    actionCreator: addCustomer,
    effect: async () => {
      dispatch(activateNotificationModal({
        message: 'Customer succesfully added'
      }));
    }
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: ""
      }}
      validationSchema={CustomerSchema}
      onSubmit={
        (values: Customer, { setSubmitting, resetForm }: FormikHelpers<Customer>) => {
          onAddCustomer(values);
          setSubmitting(false);
          resetForm();
        }
      }
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledSection>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            <Field
              as={StyledInput}
              data-testid="firstName"
              id="firstName"
              name="firstName"
            />
            <StyledError data-testid="errorFirstName">
              {errors.firstName && touched.firstName ? errors.firstName : null}
            </StyledError>
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            <Field
              as={StyledInput}
              data-testid="lastName"
              id="lastName"
              name="lastName"
            />
            <StyledError data-testid="errorLastName">
              {errors.lastName && touched.lastName ? errors.lastName : null}
            </StyledError>
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
            <Field
              as={StyledInput}
              data-testid="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              validate={validatePhone}
            />
            <StyledError data-testid="errorPhoneNumber">
              {errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}
            </StyledError>
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="dateOfBirth">Date of Birth</StyledLabel>
            <Field
              as={StyledInput}
              data-testid="dateOfBirth"
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
            />
            <StyledError data-testid="errorDateOfBirth">
              {errors.dateOfBirth && touched.dateOfBirth ? errors.dateOfBirth : null}
            </StyledError>
          </StyledSection>
          <StyledPrimaryButton
            type="submit"
            data-testid="customerSubmitButton"
          >
            Add Customer
          </StyledPrimaryButton>
        </StyledForm>)
      }
    </Formik>
  );
};

export default CustomerForm;
