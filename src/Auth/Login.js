import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css"; 
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login/`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
  
      const { access, refresh, role } = response.data;
      console.log(response.data, "komalll")
  
      if (role !== "client") {
        setError("You are not authorized. Please log in with client credentials.");
        setLoading(false);
        return;
      }
  
      localStorage.setItem("access_token", access); 
      localStorage.setItem("access_refresh", refresh); 
      localStorage.setItem("user_role", role);
  
      navigate("/main"); 
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
      </form>
    </div>
  );
}
