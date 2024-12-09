import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (phoneNumber && password) {
      localStorage.setItem("userPhoneNumber", phoneNumber);
      localStorage.setItem("userPassword", password);
      alert("Aka rahmat idea uchun");
      navigate("/home");
    } else {
      alert("Uhla uka");
    }
  };

  return (
    <div
      className="bg-cover bg-center text-white font-bold"
      style={{ backgroundImage: "url('./bg.png')" }}
    >
      <div className="flex">
        <img
          className="w-15 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="Back.png"
          alt="Ponchik"
        />
        <div className="flex w-50">
          <img
            className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="ponchiks.png"
            alt="Ponchik"
          />
          <img
            className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="drink.png"
            alt="Ponchik"
          />
          <img
            className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="ponchik.png"
            alt="Ponchik"
          />
          <img
            className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="cake.png"
            alt="Ponchik"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 mt-40 mb-5 h-screen">
        <h1>Login into your account</h1>
        <input
          className="p-2 w-[15rem] border-2 text-gray-400  border-orange-500 rounded-lg"
          type="number"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="p-2 w-[15rem] border-2 text-gray-400  border-orange-500 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col items-center justify-center space-y-6 mt-40 mb-5 ">
          <button
            className="w-72 bg-orange-700 p-2 rounded-2xl"
            onClick={handleLogin}
          >
            Log in
          </button>
          <Link to="/register">Create new account</Link>
        </div>
      </div>
    </div>
  );
};