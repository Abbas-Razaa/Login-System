import React, { useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Login toggleForm={() => setIsLogin(false)} />
      ) : (
        <Registration toggleForm={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Auth;
