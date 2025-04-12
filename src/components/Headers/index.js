import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import "./index.css"

const Headers = () => {
    const name = JSON.parse(localStorage.getItem("user"))


  return (
    <nav className='nav-bar-container'>
        <div className='icon-brand-container'>
            <ShoppingCartIcon style={{fontSize: 35, marginLeft: 10}}/>
            <h1 className='brand-heading'>fastcart</h1>
        </div>

        <div className='serach-icon-text-container'>
            <SearchIcon style={{fontSize: 30}}/>
            <p className='search-text'>Search...</p>
        </div>

        <div className='chat-notification-profile-container'>
            <ChatOutlinedIcon style={{fontSize: 20}}/>
            <NotificationsNoneOutlinedIcon style={{fontSize: 20, marginLeft: 10}}/>
            <Avatar style={{ 
                backgroundColor: "transparent",
                border: "2px solid white",
                marginLeft: 10,
                height: "30px"}}
          >
            {name.result[0].name[0].toUpperCase()}
            </Avatar>
            <h1 className='admin-name'>{name.result[0].name.toUpperCase()}</h1>
        </div>
    </nav>
  )
}

export default Headers
