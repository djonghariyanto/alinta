import * as React from "react";

import CustomerItem from './common/component.item';
import { useSelector } from "../../../../store";

const CustomerList: React.FC = () => {
  const customers = useSelector(({ customer }) => customer);

  return (
    <>
      {customers.map(customer => 
        <CustomerItem key={customer.id} customer={customer} />)
      }
    </>
  );
};

export default CustomerList;
