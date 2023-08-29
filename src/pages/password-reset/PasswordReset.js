import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PasswordReset() {
  const navigate = useNavigate();
  const [searchUser, setSearchUser] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const reset = (e) => {
    e.preventDefault();
    console.log(resetEmail);
    setPasswordShown(!passwordShown);
  };

  const searchForUser = () => {
    setSearchUser(!searchUser);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "6px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0)",
          border: "1px solid black ",
          width: "500px",
          height: "280px",
          padding: "0 2rem",
          margin: "auto auto",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0 10px 0",
            borderBottom: "1.5px solid black",
          }}
        >
          Find your account
        </h2>

        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>

        <form onSubmit={(e) => reset(e)}>
          <input
            placeholder="Please enter your email address"
            type="email"
            style={{
              width: "250px",
              outline: "none",
              height: "25px",
            }}
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-eye"
          viewBox="0 0 16 16"
        >
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg> */}

          {/* <input
          placeholder="Password"
          type={passwordShown ? "text" : "password"}
        /> */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              float: "bottom-left",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "blue",
                padding: "10px 20px",
                borderRadius: "3px",
                border: "1px solid blue",
              }}
              onClick={() => navigate("/login")}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                borderRadius: "3px",
                border: "none",
              }}
              type="submit"
              onClick={searchForUser}
            >
              Reset
            </button>
          </div>
          {searchUser ? (
            <input type="password" placeholder="Enter New Password" />
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
