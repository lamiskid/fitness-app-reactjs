import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Log from "./../../assets/log.svg";

function SignIn() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" method="POST" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="Password" placeholder="Password" />
            </div>
            <div className="Forget-Pass">
              <Link
                to="/ForgotPassword"
                className="Forget"
                id="sign-in-btn"
                style={{ padding: "10px 20px", textDecoration: "none" }}
              >
                Forgot Password ?
              </Link>
            </div>
            <input
              type="submit"
              name="submit"
              value="Login"
              className="btn solid"
            />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link
              to="/register"
              className="btn transparent"
              id="sign-in-btn"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </div>
          <img src="/src/assets/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
