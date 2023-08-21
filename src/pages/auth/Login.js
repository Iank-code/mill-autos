import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { links } from "../../helpers/links.helpers";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch("https://mill-auto-api.onrender.com/login", {
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
        console.log(res.status);
        dispatch({ type: "name", payload: formData.username });
        navigate("/");
        return res.json();
      })
      .then((data) => console.log(data));
  }
  // added form in the login

  return (
    <>
      <Navbar links={links} />
      <div className="signUpContainer active">
        <h1 className="text-center mb-4">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="form-group mb-2 col-md-4">
              <input
                type="username"
                placeholder="username"
                name="username"
                id="username"
                className="form-control"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="form-group mb-4 col-md-4">
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                className="form-control"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>

          <button type="submit" className="loginNav">
            Submit
          </button>

          <p>Haven't Registered? Sign up here</p>
          <button className="loginNav" onClick={() => navigate("/register")}>
            Register
          </button>
          <p>
            Forgot password? Click{" "}
            <Link
              style={{
                color: "green",
              }}
              to="/reset"
            >
              Here
            </Link>{" "}
            to reset
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
