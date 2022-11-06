export interface Customer {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export interface ICustomer extends Customer {
  id: string;
}

export type CustomerState = ICustomer[]; 

export const CUSTOMER_SLICE = "customer";

export const ERROR_REQUIRED = "Required";
export const ERROR_SAME_NAME = "First name and last name can not be the same";
export const ERROR_PHONE = "Invalid phone number";

