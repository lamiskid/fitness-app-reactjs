import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import defaultProfilePicture from "./../../assets/profile.jpg";
import "./SignUp.css";

const SignUp = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const fileInputRef = useRef(null); // Declare fileInputRef

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const chooseRole = (event) => {
    setIsVisible(!isVisible);
  };
  const imClient = (event) => {
    setIsCoach(!isCoach);
  };
  return (
    <div className="container sign-up-mode">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" method="POST" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div
              className="profile_picture"
              style={{
                backgroundImage: backgroundImage
                  ? `url('${backgroundImage}')`
                  : `url(${defaultProfilePicture})`,
              }}
              onClick={() => fileInputRef.current.click()}
            ></div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="name" placeholder="Name" />
              </div>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="Surname" placeholder="Surname" />
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="input-field">
                <i className="fas fa-user"></i>

                <select name="Gender" id="Gender">
                  <option value="volvo">Male</option>
                  <option value="saab">Female</option>
                </select>
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="Email" placeholder="Email" />
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="Password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="Conf-Password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <input
              class="file"
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />

            {/* <input
              type="submit"
              name="submit"
              className="btn"
              value="Sign up"
            /> */}
            <div className="btn signup-continue" onClick={() => chooseRole()}>
              Continue {">>"}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel"></div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link
              to="/login"
              className="btn transparent"
              id="sign-in-btn"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
          <img src="src/assets/register.svg" className="image" alt="" />
        </div>
      </div>
      {isVisible && (
        <div className="role-container">
          <div className="role-content">
            <p className="role-to-signup" onClick={() => chooseRole()}>
              {"<<"}
            </p>
            <h2 className="title">Join As</h2>
            <div className="role-btn  ">
              <p>Client</p>
              <p>{">>"}</p>
            </div>

            <div className="role-btn" onClick={() => imClient()}>
              <p>Coach</p>
              <p>{">>"}</p>
            </div>
            {isCoach && (
              <>
                <div
                  className="input-field client-field"
                  style={{ borderRadius: "10px", width: "380px" }}
                >
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="expertise"
                    placeholder="Area of Expertise"
                  />
                </div>
                <div
                  className="input-field client-field"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="Experience"
                    placeholder="Years of Experience"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
