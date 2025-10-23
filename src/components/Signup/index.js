import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [userType, setUserType] = useState('');
  const [open, setOpen] = useState(false);

  const onSubmitSuccess = () => {
   navigate("/login");
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const renderNameField = () => {
    return (
      // <div>
      //   <label htmlFor="name" className="signup-lable">
      //     Name
      //   </label>
      //   <br />
      //   <input
      //     id="name"
      //     value={name}
      //     className="signup-input"
      //     type="text"
      //     onChange={(e) => setName(e.target.value)}
      //   />
      // </div>
     
      <>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          type="text"
           onChange={(e) => setName(e.target.value)}
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
      </>
    );
  
    
  };

  const renderMobileNumberField = () => {
    return (
      <>
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
      </>
    );
  };

  const renderEmailField = () => {
    return (
      // <div>
      //   <label htmlFor="email" className="signup-lable">
      //     Email
      //   </label>
      //   <br />
      //   <input
      //     id="email"
      //     value={email}
      //     className="signup-input"
      //     type="email"
      //     onChange={(e) =>  setEmail(e.target.value)}
      //   />
      // </div>

      <>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          type="email"
           onChange={(e) => setEmail(e.target.value)}
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
      </>
    );
  };

  const renderPasswordField = () => {
    return (

      <>
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
      </>
    );
  };

  const renderUserTypeField = () => {
    return(
      <FormControl sx={{ m: 1, minWidth: 150}} >
        <InputLabel id="userType"
        sx={{
          color: 'grey',
          '&.Mui-focused': {
            color: '#000000', 
          },
          '&.Mui-shrink': {
            color: '000000', 
          },
        }}
        >User</InputLabel>
        <Select
          labelId="userType"
          id="userType"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={userType}
          label="User"
          onChange={(e) => setUserType(e.target.value)}
          style={{
            width: "200px",
            height: "68px",
            marginBottom: "10px",
            backgroundColor: "#ffffff"
          }}
          sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey', 
            border: "1.5px solid gray",
          },
        
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000', 
            border: "1.5px solid #000000",
          },
         
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000',
            border: "1.5px solid #000000",
          },
          
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
    )
  }

  const onSubmitSignupForm = async (event) => {
    event.preventDefault();
    const userDetails = { name, mobileNumber, email, password, userType};
    const url = "http://localhost:3004/signup";

    if (name !== "" && mobileNumber !== "" && email !== "" && password !== "" && userType !== "") {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);
      console.log("387signupresponse", response)
      if (response.ok === true) {
        const successData = await response.json()
        console.log("390signupData", successData)
        onSubmitSuccess();
        setName("");
        setMobileNumber("");
        setEmail("");
        setPassword("");
        setUserType("")
        setErrorMessage("")
      } else if(response.ok === false){
        const failureData = await response.json()
        console.log("399SignupError", failureData)
        setErrorMessage(failureData)
        // alert("Cannot Fetch Data");
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
      <div>{renderUserTypeField()}</div>
      <p className="error-msg">{errorMessage}</p>
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
