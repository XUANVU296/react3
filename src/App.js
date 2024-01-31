// // App.js
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Employees from "./components/Employees";
import EmployeeDetail from "./components/EmployeeDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
