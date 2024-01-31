// // Login.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     // State để lưu trữ giá trị của email và password
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     // Hàm xử lý khi người dùng thay đổi giá trị trong trường email
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     // Hàm xử lý khi người dùng thay đổi giá trị trong trường password
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     // Hàm xử lý khi người dùng nhấn nút đăng nhập
//     const handleLogin = () => {
//         // Kiểm tra thông tin đăng nhập
//         if (email === "admin@gmail.com" && password === "123") {
//             // Thực hiện đăng nhập thành công
//             alert("Đăng nhập thành công!");
//             navigate("/home", { state: { account: { email } } });
//         } else {
//             alert("Email hoặc mật khẩu không đúng.");
//         }
//     };

//     return (
//         <div>
//             <h2>Đăng nhập</h2>
//             <form>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={handlePasswordChange} />
//                 </div>
//                 <button type="button" onClick={handleLogin}>
//                     Đăng nhập
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123") {
      navigate("/employees", { state: { account: { email } } });
    } else {
      alert("Dang nhap khong thanh cong");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
