import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";

const Login = (props) => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmitSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 10 });
    navigate("/dashboard", { replace: true });
  };

  const onChangeMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const renderMobileNumberField = () => {
    return (
      <div>
        <label htmlFor="mobileNumber" className="login-lable">
          Mobile Number
        </label>
        <br />
        <input
          id="mobileNumber"
          value={mobileNumber}
          className="login-input"
          type="text"
          onChange={onChangeMobileNumber}
        />
      </div>
    );
  };

  const renderPasswordField = () => {
    return (
      <div>
        <label htmlFor="mobipasswordleNumber" className="login-lable">
          Password
        </label>
        <br />
        <input
          id="password"
          value={password}
          className="login-input"
          type="password"
          onChange={onChangePassword}
        />
      </div>
    );
  };

  const onSubmitLiginForm = async (event) => {
    event.preventDefault();
    const loginDetails = { mobileNumber, password };
    const url = "http://localhost:3004/login";
    if (mobileNumber !== "" && password !== "") {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      };
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        onSubmitSuccess(data.token);
        localStorage.setItem("user", JSON.stringify(data));
        setMobileNumber("");
        setPassword("");
      } else if (response.ok === false) {
        console.log("82Response", response);
        const errorMessage = await response.json();
        console.log("84Data", errorMessage);
        setErrMsg(errorMessage);
        setMobileNumber("");
        setPassword("");
        navigate("/login", { replace: true });
        // alert(errorMessage)
      }
    } else {
      alert("Enter Valit Details");
    }
  };

  useEffect(() => {
    const isAuth = Cookies.get("jwt_token");
    console.log("99login", isAuth);
    if (isAuth && isAuth !== "undefined") {
      navigate("/dashboard", { replace: true });

      console.log("102", isAuth && isAuth !== "undefined");
    } else if (isAuth && isAuth === "undefined") {
      navigate("/login", { replace: true });
    }
    console.log("107", isAuth);
    console.log("108", isAuth !== "undefined");
  }, []);

  return (
    <form className="login-form" onSubmit={onSubmitLiginForm}>
      <h1 className="heading">Login</h1>
      <div>{renderMobileNumberField()}</div>
      <div>{renderPasswordField()}</div>
      <p className="err-message">{errMsg}</p>
      <div>
        <Button
          variant="contained"
          type="submit"
          style={{ marginTop: "20px", backgroundColor: "blue" }}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
