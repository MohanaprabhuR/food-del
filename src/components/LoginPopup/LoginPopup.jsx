import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            ""
          ) : (
            <input type="text" placeholder="Enter Your Name" required />
          )}

          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-conditions">
          <input type="checkbox" required />
          <p>By Contiuning,i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign Up")}>
            Create a New Account? <span>Click Here</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Allready Haven a Acoount? <span>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
