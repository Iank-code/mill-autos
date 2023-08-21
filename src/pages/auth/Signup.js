import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import {links} from "../../helpers/links.helpers"
//
function Signup(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch("https://mill-auto-api.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
        }
        dispatch({ type: "ADD_NAME", payload: formData.username });
        navigate("/");
        console.log(res.status);
        return res.json();
      })
      .then((data) => console.log(data));
  }

  // added form to enable user to enter their credials and sign up
  return (
    <>
      <Navbar links={links} />
      <div className="signUpContainer active">
        {/* <Link
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            color: "green",
            textDecoration: "none",
          }}
          to="/"
        >
          Return To Home
        </Link> */}
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          {/* Password */}
          <div className="form-group4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          {/* Confirm password */}
          <div className="form-group4">
            <input
              type="password"
              placeholder="password_confirmation"
              name="password_confirmation"
              id="password_confirmation"
              onChange={handleChange}
              value={formData.password_confirmation}
            />
          </div>
          <button type="submit" className="loginNav">
            Submit
          </button>
          <p>Have an account? Click here to Login</p>
        </form>

        <button className="loginNav" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </>
  );
}

export default Signup;
