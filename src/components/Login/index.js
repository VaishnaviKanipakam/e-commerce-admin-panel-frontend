import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import {jwtDecode} from "jwt-decode";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";

const Login = (props) => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmitSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 10 });
    navigate("/dashboard");
    const decoded = jwtDecode(token)
    console.log("18Login", decoded)
  };

  const renderMobileNumberField = () => {
    return (
      // <div>
      //   <label htmlFor="mobileNumber" className="login-lable">
      //     Mobile Number
      //   </label>
      //   <br />
      //   <input
      //     id="mobileNumber"
      //     value={mobileNumber}
      //     className="login-input"
      //     type="text"
      //     onChange={onChangeMobileNumber}
      //   />
      // </div>


      <TextField
                id="mobileNumber"
                label="Mobile Number"
                variant="outlined"
                value={mobileNumber}
                type="text"
                 onChange={(e) => setMobileNumber(e.target.value)}
                required
                style={{
                  width: "304px",
                  height: "68px",
                  marginBottom: "10px",
                }}
                InputLabelProps={{
                  sx: {
                    color: "gray",
                    fontFamily: "serif",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "#000000",
                      fontFamily: "serif",
                    },
                  },
                }}
                sx={{
                  ".MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    input: {
                      fontFamily: "serif",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "16px",
                      lineHeight: "34px",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#000000",
                    },
                    fieldSet: {
                      border: "1.5px solid gray",
                      borderRadius: "12px",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.5px solid #000000",
                      color: "#000000",
                    },
                  },
                }}
              />
    );
  };

  const renderPasswordField = () => {
    return (
      // <div>
      //   <label htmlFor="mobipasswordleNumber" className="login-lable">
      //     Password
      //   </label>
      //   <br />
      //   <input
      //     id="password"
      //     value={password}
      //     className="login-input"
      //     type="password"
      //     onChange={onChangePassword}
      //   />
      // </div>


       <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                 onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "304px",
                  height: "68px",
                  marginBottom: "10px",
                }}
                InputLabelProps={{
                  sx: {
                    color: "gray",
                    fontFamily: "serif",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "#000000",
                      fontFamily: "serif",
                    },
                  },
                }}
                sx={{
                  ".MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    input: {
                      fontFamily: "serif",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "16px",
                      lineHeight: "34px",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#000000",
                    },
                    fieldSet: {
                      border: "1.5px solid gray",
                      borderRadius: "12px",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.5px solid #000000",
                      color: "#000000",
                    },
                  },
                }}
              />
    );
  };

  const onSubmitLiginForm = async (event) => {
    event.preventDefault();
    const loginDetails = { mobileNumber, password,  };
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
      console.log("76LoginResponse", response)
      if (response.ok === true) {
        const data = await response.json();
        console.log("79LoginData", data)
        onSubmitSuccess(data.token);
        console.log("178LiginToken", data.token)

        localStorage.setItem("user", JSON.stringify(data));
        setMobileNumber("");
        setPassword("");
      } else if (response.ok === false) {
        console.log("84LoginResponse", response);
        const errorMessage = await response.json();
        console.log("86LogiData", errorMessage);
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

      console.log("102Login", isAuth && isAuth !== "undefined");
    } else if (isAuth && isAuth === "undefined") {
      navigate("/login", { replace: true });
    }
    console.log("107Login", isAuth);
    console.log("108Login", isAuth !== "undefined");
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
