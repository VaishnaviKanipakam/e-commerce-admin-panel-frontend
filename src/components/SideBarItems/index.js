import React from 'react'
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./index.css"

const SideBarItems = () => {
    const onClickLogOut = () => {
        Cookies.remove("jwt_token")
        window.location.href = '/login';
    }

    const jwtToken  = Cookies.get("jwt_token")
    if(jwtToken === undefined){
        return <Navigate to='/login' />
    }

  return (
    <div className='side-bar-items-container'>
         <Button 
                className='logout-button' 
                onClick={onClickLogOut} 
                variant="contained" 
                type="submit" 
                style={{marginTop: "20px", backgroundColor: "blue"}}
                > 
                      Logout  
              </Button>
      <div className='icon-text-container'>
        <HomeOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Dashboard</h1>
      </div>
      <div className='icon-text-container'>
        <ListOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Orders</h1>
        <p className='orders-count'>19</p>
      </div>
      <div className='icon-text-container'>
        <LocalOfferOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Products</h1>
      </div>
      <div className='icon-text-container categories-container'>
        <FolderOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Categories</h1>
      </div>
      <div className='icon-text-container'>
        <SupervisorAccountOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Customers</h1>
      </div>
      <div className='icon-text-container'>
        <SignalCellularAltIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Reports</h1>
      </div>
      <div className='icon-text-container'>
        <StarBorderOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Cupons</h1>
      </div>
      <div className='icon-text-container'>
        <ChatOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Inbox</h1>
      </div>
      <p className='menu-info'>Other Information</p>
      <div className='icon-text-container'>
        <HelpOutlineOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Knowledge Base</h1>
      </div>
      <div className='icon-text-container'>
        <TipsAndUpdatesOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Products Updates</h1>
      </div>
      <p className='menu-info'>Settings</p>
      <div className='icon-text-container'>
        <PermIdentityOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Personal Settings</h1>
      </div>
      <div className='icon-text-container'>
        <SettingsOutlinedIcon style={{fontSize: 25}}/>
        <h1 className='menu-name'>Global Settings</h1>
      </div>
    </div>
  )
}

export default SideBarItems
