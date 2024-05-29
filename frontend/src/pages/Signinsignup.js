import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Axios from 'axios';


const Signinsignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
    setEmail("");
    setName("");
    setPassword("");
    setErrors("");
    console.log("Login");
  };

  const handleRegister = () => {
    if (showLogin) {
      document.getElementById("login").style.transform = "translateY(5px)";
      setShowLogin(!showLogin);
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleName = (e) => {
    errors.name = "";
    setName(e.target.value);
  };

  const handleRegisterValue = async () => {
    const validationErrors = validate();
    console.log("Email: ", email);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await Axios.post("http://localhost:3987/register", {
          name,
          email,
          password,
        });
        console.log("Registration Successful", response.data);
        setEmail("");
        setName("");
        setPassword("");
        setShowLogin(!showLogin);
      } catch (error) {
        console.error("Registration failed", error);
        if (error.response && error.response.data) {
          setErrors({ serverError: error.response.data.message || error.response.data.error });
        } else {
          setErrors({ serverError: "Unknown Error Occurred!" });
        }
        setEmail("");
        setName("");
        setPassword("");
      }
    } else {
      setErrors(validationErrors);
    }
  };
  
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid Email Address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password is too short";
    }

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!loginEmail.trim()) {
      errors.loginEmail = "Email is Required";
    } else if (!validateEmail(loginEmail)) {
      errors.loginEmail = "Invalid Email format";
    }

    if (!loginPassword.trim()) {
      errors.loginPassword = "Password is required";
    } else if (loginPassword.length < 8) {
      errors.loginPassword = "Password is too short";
    }

    return errors;
  };

  const handleLoginValue = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg">
      <div className="bg-gray-100 rounded-lg h-3/4 sm:h-5/6 overflow-hidden shadow-lg w-full max-w-sm">
        <div className="px-10 ">
          <h1
            id="signup"
            onClick={handleRegister}
            className="text-2xl font-bold mt-5 mb-4 cursor-pointer text-center font-artifika transition duration-500 ease-in-out hover:scale-110"
          >
            Register
          </h1>
          <div>
            <div className={`${errors.name ? "my-0" : "my-1"} relative`}>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1 items-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleName}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              <span className="absolute flex items-center inset-y-0 right-0 top-7 cursor-pointer pr-3">
                <FaRegUser />
              </span>
            </div>
            {errors.name && <p className="text-red-600">{errors.name}</p>}
            <div className={`${errors.email ? "my-0" : "my-1"} relative`}>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@gmail.com"
              />
              <span className="absolute flex items-center inset-y-0 right-0 pr-3 top-7 cursor-pointer leading-5 text-xl">
                <MdOutlineMail className="text-black" />
              </span>
            </div>
            {errors.email && <p className="text-red-600">{errors.email}</p>}
            <div className={`${errors.password ? "my-0" : "my-3"} relative`}>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-xl leading-5 cursor-pointer"
              >
                {showPassword ? (
                  <FaEye className="text-black" />
                ) : (
                  <FaEyeSlash className="text-black" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password}</p>
            )}
            <div
              className={`${errors.email ? "my-0" : "my-8"} ${
                errors.password ? "my-1" : "my-8"
              } flex justify-center items-center`}
            >
              <button
                onClick={handleRegisterValue}
                className="border border-gray-300 px-6 py-2 rounded-md inline-block bg-indigo-600 mb-8 sm:mb-6 hover:bg-indigo-700 text-lg font-semibold text-white"
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div
          id="login"
          className="bg-yellow-400 w-full h-full p-8 top-0 left-0"
          style={{
            borderRadius: "60% / 10%",
            transform: showLogin ? "translateY(-370px)" : "translateY(0)",
            transition:
              "transform 0.3s ease-in-out, border-radius 0.3s ease-in-out",
          }}
        >
          <h1
            onClick={handleLogin}
            className="text-2xl font-bold  cursor-pointer font-artifika mb-4 text-center transition duration-500 ease-in-out hover:scale-110"
          >
            Login
          </h1>
          <div className="space-y-3 p-4">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@gmail.com"
              />
              <span className="absolute flex items-center inset-y-0 right-0 pr-3 top-8 cursor-pointer leading-5 text-xl">
                <MdOutlineMail className="text-black" />
              </span>
            </div>
            {errors.loginEmail && (
              <p className="text-red-600">{errors.loginEmail}</p>
            )}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-xl leading-5 cursor-pointer"
              >
                {showPassword ? (
                  <FaEye className="text-black" />
                ) : (
                  <FaEyeSlash className="text-black" />
                )}
              </span>
            </div>
            {errors.loginPassword && (
              <p className="text-red-600">{errors.loginPassword}</p>
            )}
            <div className="flex items-center justify-center">
              <button
                onClick={handleLoginValue}
                className="border border-gray-300 px-6 py-2 rounded-md inline-block bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinsignup;
