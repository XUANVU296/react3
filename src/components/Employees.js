// Employees.js
import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  const employees = [
    { id: 1, name: "Hoa", age: 20 },
    { id: 2, name: "Khánh", age: 25 },
    { id: 3, name: "Tú", age: 22 },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <Link to={`/employees/${employee.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
