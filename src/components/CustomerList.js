import React from "react";

function CustomerList({ customers, onSelect }) {
  return (
    <div>
      <h2>Customers</h2>
      {customers.length === 0 ? (
        <p>No customers found</p>
      ) : (
        <ul>
          {customers.map(customer => (
            <li key={customer.customerId} onClick={() => onSelect(customer.customerId)}>
              {customer.customerName}
              Customer ID: {customer.customerId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomerList;