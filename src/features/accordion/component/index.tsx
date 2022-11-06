import * as React from 'react';

import { useSelector, useDispatch } from "../../../store";
import { subscribeAccordion, unsubscribeAccordion } from "../slice";
import type { AccordionState } from "../";

export interface Props {
  id: string,
  className?: string,
  groupId?: string,
  children: React.ReactElement | React.ReactElement[]
}

const Accordion: React.FC<Props> = (props) => {
  const dispatch = useDispatch(),
    { children, className, ...payload } = props,
    updatedBase = useSelector(({ accordion }) => {
      const current = accordion.find(acc => acc.id === props.id) as AccordionState;

      return current?.activated ? className : [className, "--hidden"].join(' ');
    });

  React.useEffect(() => {
    dispatch(subscribeAccordion(payload));
    return () => { dispatch(unsubscribeAccordion(payload.id)); }
  }, []);

  return (
    <div className={updatedBase}>
      {children}
    </div>
  );
};

export default Accordion;
