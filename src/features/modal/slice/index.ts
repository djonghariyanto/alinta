import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { MODAL_SLICE } from '../';
import type { ModalState, Payload } from '../';

const initialState: ModalState = {
  activated: false,
  mode: 'none',
  payload: null,
  closeStatus: 0
}

export const CLOSE_OK_STATUS = 1;
export const CLOSE_CANCEL_STATUS = 0;

export const modalSlice = createSlice({
  name: MODAL_SLICE,
  initialState,
  reducers: {
    activateConfirmationModal: (state, action: PayloadAction<Payload>) => {
      state.activated = true;
      state.mode = 'confirmation';
      state.payload = action.payload;
    },

    activateNotificationModal: (state, action: PayloadAction<Partial<Payload>>) => {
      state.activated = true;
      state.mode = 'notification';
      state.payload = action.payload as Payload;
    },

    closeModal: (state, action: PayloadAction<number | undefined>) => {
      const closeStatus = action.payload ? action.payload : CLOSE_CANCEL_STATUS;

      state.activated = false;
      state.mode = 'none';
      state.closeStatus = closeStatus;
    }
  }
});

export const { activateConfirmationModal, activateNotificationModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
