import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"; // External CSS file for styling
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.css";
import "../styles/templatemo-training-studio.css";

const Signup = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credential;

    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/login");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Registration Failed", "danger");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-form">
          <h2>
            Create Your <em>NutriTrack</em> Account
          </h2>
          <form onSubmit={handleClick}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={credential.name}
                onChange={onChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credential.email}
                onChange={onChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credential.password}
                onChange={onChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Repeat Your Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                value={credential.cpassword}
                onChange={onChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <div className="signup-image">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt="Signup"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
