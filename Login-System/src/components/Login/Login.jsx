import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("jwtToken", token);

      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center px-4 md:px-0"
      style={{ backgroundColor: "#0571E133" }}
    >
      <div className="w-full max-w-5xl h-auto md:h-[90%] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">

        <div className="hidden md:flex flex-1 bg-gradient-to-b from-blue-600 to-blue-900 text-white flex-col justify-center px-16 rounded-l-2xl">
          <h1 className="text-5xl font-bold mb-6">GoFinance</h1>
          <p className="text-lg mb-8">The most popular peer-to-peer lending at SEA.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Read More
          </button>
        </div>


        <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center px-6 md:px-10 py-8">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-4 text-center">Hello Again!</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">Welcome Back</p>
            <form className="space-y-6" onSubmit={handleLogin}>
              

              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 pl-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

          
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  className="w-full p-4 pl-12 pr-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
  
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>

     
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>


            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

            <a
              href="#"
              className="text-blue-600 mt-4 hover:underline text-sm font-medium block text-center"
            >
              Forgot Password
            </a>

            <p
              onClick={toggleForm}
              className="text-blue-600 mt-4 hover:underline text-sm font-medium cursor-pointer text-center"
            >
              Create new account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
