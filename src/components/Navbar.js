import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import { resetUserData } from "../actions/userActions";
import Signup from "./Signup";
import Login from "./Login";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const [selectRegister, setSelectRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [selectLogin, setSelectLogin] = useState(false);
  let name;
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user]);
  const gotTOSignUp = (setLogin) => {
    navigate("/register");
    setSelectRegister(true);
  };

  const resetUserData = () => ({
    type: "RESET_USER_DATA",
  });

  return (
    <div>
      <nav className="top-padding">
        <Link
          to="/"
          style={{
            color: "red",
          }}
        >
          MILL AUTOS
        </Link>
        <div>
          <Link className="right-padding" to="/stock">
            Our Stock
          </Link>
          <Link to="/about" className="right-padding">
            About
          </Link>
          <Link to="/contact">Contacts</Link>
        </div>

        {/* {login ? (
          <>
            <button
              style={{
                marginLeft: "2rem",
              }}
              onClick={() => navigate("/admin", { state: { carData: name } })}
            >
              Dashboard
            </button>
            <button
              style={{
                marginLeft: "2rem",
              }}
              // onClick={() => {
              //   fetch("http://127.0.0.1:3000/logout", {
              //     method: "DELETE",
              //     headers: {
              //       "Content-Type": "application/json",
              //     },
              //   })
              //     .then((res) => {
              //       if (!res.ok) {
              //         throw new Error(res.status);
              //       }
              //       console.log(res.status);
              //       navigate("/");
              //       setLogin(false);
              //       return res.json();
              //     })
              //     .catch((error) => {
              //       console.log(error);
              //     });
              // }}
              onClick={() => {
                setLoggedOut(true)
                setLogin(false);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <button
              className="right-padding"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button onClick={() => gotTOSignUp(setLogin)}>Signup</button>
          </div>
        )} */}
      </nav>
    </div>
  );
}

export default Navbar;
