import * as React from 'react';

import ModalContainer from '../container';
import { useSelector } from '../../../../store';

const ModalProxy: React.FC = () => {
  const Wrapper = useSelector(
    ({ modal }) => modal.activated
      ? <ModalContainer />
      : null
  );

  return Wrapper;
};

export default ModalProxy;
