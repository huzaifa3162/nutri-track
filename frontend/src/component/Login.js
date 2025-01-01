import React, { useState } from "react";
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.css";
import "../styles/templatemo-training-studio.css";
import "../styles/login.css"; // External CSS for additional styling
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authToken);
        props.showAlert("Login successfully", "success");
        navigate("/Home");
      } else {
        props.showAlert("Login Failed", "danger");
        setError(json.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      props.showAlert("An error occurred. Please try again later.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">
          Welcome Back to <em>NutriTrack</em>!
        </h2>
        <p className="login-subtitle">
          Log in to explore the finest food ingredients.
        </p>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              name="email"
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
              value={credential.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary login-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
