import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ACCORDION_SLICE } from "../";
import type { AccordionState } from "../";

const initialState: AccordionState[] = [];

export const accordionSlice = createSlice({
  name: ACCORDION_SLICE,
  initialState,
  reducers: {
    subscribeAccordion: (state, action: PayloadAction<{ id: string, groupId?: string }>) => {
      state.push({
        ...action.payload,
        activated: false,
        controlled: action.payload?.groupId !== undefined
      });
    },

    unsubscribeAccordion: (state, action: PayloadAction<string>) => {
      state = state.filter(accordion => accordion.id !== action.payload);
    },

    toggleAccordion: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(accordion => accordion.id === action.payload);

      const groupId = state[index].groupId,
        previousIndex = state
          .filter(accordion => accordion.groupId === groupId)
          .findIndex(accordion => accordion.activated);

      if (previousIndex >= 0 && index !== previousIndex)
        state[previousIndex].activated = !state[previousIndex].activated;
      state[index].activated = !state[index].activated
    },
  }
});

export const { toggleAccordion, subscribeAccordion, unsubscribeAccordion } = accordionSlice.actions;

export default accordionSlice.reducer;
