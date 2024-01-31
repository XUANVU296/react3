// Home.js
import React from "react";

const Home = (props) => {
  const account = props.location?.state?.account || null;

  return (
    <div>
      <h2>Trang chủ</h2>
      {account && (
        <p>
          Đã đăng nhập với tài khoản: {account.email}
        </p>
      )}
    </div>
  );
};

export default Home;
