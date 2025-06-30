import React from "react";

function Filters({ selectedMonth, onMonthChange, year, onYearChange }) {
  return (
    <div>
      <select value={selectedMonth} onChange={e => onMonthChange(e.target.value)}>
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
          <option key={i} value={i + 1}>{m}</option>
        ))}
      </select>
      <select value={year} onChange={e => onYearChange(e.target.value)}>
        {[2025, 2024, 2023, 2022, 2021].map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;