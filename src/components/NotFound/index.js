import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

import "./index.css"


import React from 'react'

const NotFound = () => {
  return (
    <div className="not-found-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWmJAYeQHQwtgIxmzKerWa8XwKemFOACl7A&s" alt="notFound" className="not-found-img"/>
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-description">Continue to shopping</p>
        <Link to="/dashboard">
              <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff", margin: "40px 0px 0px 0px"}}>Shop</Button>
        </Link>
    </div>
  )
}

export default NotFound
