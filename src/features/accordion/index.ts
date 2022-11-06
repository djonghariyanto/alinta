export interface AccordionState {
  id: string,
  groupId?: string,
  controlled: boolean,
  activated: boolean
}

export const ACCORDION_SLICE = "accordion";
