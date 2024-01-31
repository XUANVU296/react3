// EmployeeDetail.js
import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.employee) {
    return <div>No data found</div>;
  }

  const { id, name, age } = state.employee;

  return (
    <div>
      <h2>Employee Detail</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default EmployeeDetail;
