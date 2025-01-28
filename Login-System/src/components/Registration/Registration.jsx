import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const Registration = ({ toggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center px-4 md:px-0" style={{ backgroundColor: "#0571E133" }}> 
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
            <h2 className="text-3xl font-bold mb-4 text-center">Create an Account</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">Sign up to start your journey</p>
            <form className="space-y-6" onSubmit={handleRegister}>
              
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 pl-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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

   
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full p-4 pl-12 pr-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Signup
              </button>
            </form>

            <p
              onClick={toggleForm}
              className="text-blue-600 mt-4 hover:underline text-sm font-medium cursor-pointer text-center"
            >
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
