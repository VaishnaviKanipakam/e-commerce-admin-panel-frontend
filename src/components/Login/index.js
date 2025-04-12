import React, {useState} from 'react'
import "./index.css"
import Cookies from 'js-cookie'
import Button from '@mui/material/Button';

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitSuccess = token => {
        Cookies.set("jwt_token", token, {expires: 10})
        window.location.href = '/dashboard'
   }

    const onChangeMobileNumber = event => {
        setMobileNumber(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const renderMobileNumberField = () => {
        return(
            <div>
                <label htmlFor='mobileNumber' className='login-lable'>Mobile Number</label>
                <br />
                <input 
                    id='mobileNumber'
                    value={mobileNumber}
                    className='login-input'
                    type='text'
                    onChange={onChangeMobileNumber}
                />
            </div>
        )
    }

    const renderPasswordField = () => {
        return(
            <div>
                <label htmlFor='mobipasswordleNumber' className='login-lable'>Password</label>
                <br />
                <input 
                    id='password'
                    value={password}
                    className='login-input'
                    type='password'
                    onChange={onChangePassword}
                />
            </div>
        )
    }

     const onSubmitLiginForm = async event => {
         event.preventDefault()
         const loginDetails =  {mobileNumber, password} 
         const url = 'http://localhost:3004/login'
         if(mobileNumber !== "" && password !== ""){
             
         const options = {
             method: "POST",
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               },
             body: JSON.stringify(loginDetails)
         }
         const response = await fetch(url, options)
         if(response.ok === true){
             const data = await response.json()
             onSubmitSuccess(data.token)
             localStorage.setItem("user", JSON.stringify(data)) 
             setMobileNumber("")     
             setPassword("")
             }else{
                 alert("Response not processed")
             }
         }else{
             alert("Enter Valit Details")
         }
     }


  return (
    <form className='login-form' onSubmit={onSubmitLiginForm}>
        <h1 className='heading'>Login</h1>
        <div>{renderMobileNumberField()}</div>
        <div>{renderPasswordField()}</div>
        <div>
        <Button variant="contained" type="submit" style={{marginTop: "20px", backgroundColor: "blue"}}> 
            Login 
        </Button>
        </div>
      </form>
  )
}

export default Login
