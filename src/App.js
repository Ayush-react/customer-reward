import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import logger from "./logger/logger";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(2025);

useEffect(() => {
  fetch("/data/transactions.json")
    .then(res => res.json())
    .then(data => {
      console.log("Loaded transactions:", data);
      setTransactions(data);
      logger.info("Transactions loaded");
    })
    .catch(err => {
      console.error("Failed to load transactions:", err);
      logger.error("Data fetch error", err);
    });
}, []);

  const filteredTxns = transactions.filter(txn => {
    const txnDate = new Date(txn.date);
    return txnDate.getMonth() + 1 === Number(month) && txnDate.getFullYear() === Number(year);
  });

  const uniqueCustomers = [...new Map(transactions.map(txn => [txn.customerId, { customerId: txn.customerId, customerName: txn.customerName  }])).values()];

  return (
    <div>
      <h1>Customer Rewards</h1>
      <Filters selectedMonth={month} onMonthChange={setMonth} year={year} onYearChange={setYear} />
      <CustomerList customers={uniqueCustomers} onSelect={setSelectedCustomer} />
      {selectedCustomer ? (
        <CustomerDetails transactions={filteredTxns} customerId={selectedCustomer} />
      ) : (
        <p>Select a customer to view details</p>
      )}
    </div>
  );
}

export default App;