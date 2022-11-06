import * as React from 'react';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { ListenerEffect, Action } from '@reduxjs/toolkit';

import customerReducer from '../features/customer/slice';
import modalReducer from '../features/modal/slice';
import accordionReducer from '../features/accordion/slice';

const listenMiddleware = createListenerMiddleware();

type ListenerOptions = {
  actionCreator: any,
  effect: ListenerEffect<Action, any, Dispatch>
}

export const useListener = (options: ListenerOptions | ListenerOptions[]) => {
  React.useEffect(() => {
    const optionsList = Array.isArray(options) ? options : [options],
      unsubs = optionsList.map(options => listenMiddleware.startListening(options));

    return () => unsubs.forEach(unsub => unsub());
  }, []);
}

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    modal: modalReducer,
    accordion: accordionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenMiddleware.middleware)
});

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export const useDispatch: () => Dispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<State> = _useSelector;
