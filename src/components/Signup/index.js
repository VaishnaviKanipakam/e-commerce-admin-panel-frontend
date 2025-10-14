import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSuccess = () => {
    window.location.href = "/login";
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const renderNameField = () => {
    return (
      <div>
        <label htmlFor="name" className="signup-lable">
          Name
        </label>
        <br />
        <input
          id="name"
          value={name}
          className="signup-input"
          type="text"
          onChange={onChangeName}
        />
      </div>
    );
  };

  const renderMobileNumberField = () => {
    return (
      <div>
        <label htmlFor="mobileNumber" className="signup-lable">
          Mobile Number
        </label>
        <br />
        <input
          id="mobileNumber"
          value={mobileNumber}
          className="signup-input"
          type="text"
          onChange={onChangeMobileNumber}
        />
      </div>
    );
  };

  const renderEmailField = () => {
    return (
      <div>
        <label htmlFor="email" className="signup-lable">
          Email
        </label>
        <br />
        <input
          id="email"
          value={email}
          className="signup-input"
          type="email"
          onChange={onChangeEmail}
        />
      </div>
    );
  };

  const renderPasswordField = () => {
    return (
      <div>
        <label htmlFor="password" className="signup-lable">
          Password
        </label>
        <br />
        <input
          id="password"
          value={password}
          className="signup-input"
          type="password"
          onChange={onChangePassword}
        />
      </div>
    );
  };

  const onSubmitSignupForm = async (event) => {
    event.preventDefault();
    const userDetails = { name, mobileNumber, email, password };
    const url = "http://localhost:3004/signup";

    if (name !== "" && mobileNumber !== "" && email !== "" && password !== "") {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);
      if (response.ok === true) {
        onSubmitSuccess();
        setName("");
        setMobileNumber("");
        setEmail("");
        setPassword("");
      } else {
        alert("Cannot Fetch Data");
      }
    } else {
      alert("Enter Required Details");
    }
  };

  useEffect(() => {
    const isAuth = Cookies.get("jwt_token");
    if (isAuth && isAuth !== "undefined") {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  return (
    <form className="signum-form" onSubmit={onSubmitSignupForm}>
      <h1 className="heading">Signup</h1>
      <div>{renderNameField()}</div>
      <div>{renderMobileNumberField()}</div>
      <div>{renderEmailField()}</div>
      <div>{renderPasswordField()}</div>
      <div>
        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: "20px", backgroundColor: "blue" }}
        >
          Signup
        </Button>
      </div>
      <p>
        Already have account
        <Link to="/login">
          <span className="span-element"> Login</span>
        </Link>
      </p>
    </form>
  );
};

export default Signup;
