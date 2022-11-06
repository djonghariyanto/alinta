export type Mode = 'confirmation' | 'notification' | 'none';

export interface Payload {
  id: string | null,
  message: string
}

export interface ModalState {
  activated: boolean,
  mode: Mode,
  payload: Payload | null,
  closeStatus: number
}

export const MODAL_SLICE = "modal";

