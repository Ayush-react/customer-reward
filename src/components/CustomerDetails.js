import React from "react";
import { calculateRewards } from "../utils/rewardUtils";

function CustomerDetails({ transactions, customerId }) {
  const data = transactions.filter(txn => txn.customerId === customerId);

  const grouped = {};

  data.forEach(txn => {
    const month = new Date(txn.date).toLocaleString("default", { month: "short" });
    grouped[month] = (grouped[month] || 0) + calculateRewards(txn.amount);
  });

  const total = Object.values(grouped).reduce((sum, val) => sum + val, 0);

  return (
    <div>
      <h3>Details for {customerId}</h3>
      {Object.keys(grouped).map(month => (
        <p key={month}>{month}: {grouped[month]} points</p>
      ))}
      <p><strong>Total: {total} points</strong></p>
    </div>
  );
}

export default CustomerDetails;