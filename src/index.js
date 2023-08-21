import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/main.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./components/hooks/userReducer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordReset from "./components/PasswordReset";
import OurStock from "./pages/stock/OurStock";
import CarDetails from "./components/CarDetails";
import AdminIndex from "./components/admin/AdminIndex";

// Links for pages
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact="true" element={<App />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/stock" element={<OurStock />} />
          <Route path="/admin" element={<AdminIndex />} />
          {/* <Route path="/create" element={<CreateCar />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
