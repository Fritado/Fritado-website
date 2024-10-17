import React, { useState } from "react";
import axios from "axios"; // Assuming you use axios for HTTP requests
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("adminToken", response.data.token); // Store the token
      navigate("/admin/dashboard"); // Redirect to admin dashboard
    } catch (err) {
      setError("Invalid login credentials");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="brand-logo">
          <img
            src="assets/img/logo3.png"
            alt="logo"
            className="d-flex mx-auto"
          />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className=" d-flex search-field">
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              className="login-ip"
            />
          </div>
          <div className="d-flex search-field position-relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              className="login-ip"
            />
            <span
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="">
            {!loading ? "SIGN IN" : "PROCESSING..."}
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default AdminLogin;
