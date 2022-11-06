import { createSlice } from '@reduxjs/toolkit';
import { v4 as generateGUID } from 'uuid';
import type { Dispatch } from 'redux';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CUSTOMER_SLICE } from '../';
import type { CustomerState, Customer } from '../';

const initialState: CustomerState = [
  {
    id: generateGUID(),
    firstName: "Charles",
    lastName: "Babbage",
    phoneNumber: "0412123123",
    dateOfBirth: new Date().toJSON() 
  },
  {
    id: generateGUID(),
    firstName: "Alan",
    lastName: "Turing",
    phoneNumber: "0395991234",
    dateOfBirth: new Date().toJSON()
  },
  {
    id: generateGUID(),
    firstName: "Ada",
    lastName: "Lovelace",
    phoneNumber: "+61423345567",
    dateOfBirth: new Date().toJSON()
  },
];

export const customerSlice = createSlice({
  name: CUSTOMER_SLICE,
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      const id = generateGUID();

      state.push({
        id,
        ...action.payload
      });
    },

    removeCustomer: (state, action: PayloadAction<string>) => {
      return state.filter(customer => customer.id !== action.payload);
    }
  }
});

export const { addCustomer, removeCustomer } = customerSlice.actions;

export default customerSlice.reducer;

// thunks section
export const validateCustomerEntry = (customer: Customer) => async (dispatch: Dispatch) => { 
  dispatch(addCustomer(customer));
}
