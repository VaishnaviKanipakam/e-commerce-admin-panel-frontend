import { useEffect } from "react";
import Cookies from "js-cookie";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
// import { useNavigate } from "react-router-dom";
import "./index.css";

const Headers = () => {
  const name = JSON.parse(localStorage.getItem("user"));
  console.log("13headers", name)
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const isAuth = Cookies.get("jwt_token");
  //   if (isAuth && isAuth !== "undefined") {
  //     navigate("/dashboard", { replace: true });
  //   } else if (isAuth && isAuth === "undefined") {
  //     navigate("/login", { replace: true }); 
  //   }
  //   console.log("22HeaderisAuth", isAuth)
  // }, []);

  return (
    <nav className="nav-bar-container">
      <div className="icon-brand-container">
        <ShoppingCartIcon style={{ fontSize: "35px", marginLeft: "10px" }} />
        <h1 className="brand-heading">fastcart</h1>
      </div>

      <div className="serach-icon-text-container">
        <SearchIcon style={{ fontSize: "30px" }} />
        <p className="search-text">Search...</p>
      </div>

      <div className="chat-notification-profile-container">
        <ChatOutlinedIcon style={{ fontSize: "20px" }} />
        <NotificationsNoneOutlinedIcon
          style={{ fontSize: "20px", marginLeft: "10px" }}
        />
        <Avatar
          style={{
            backgroundColor: "transparent",
            border: "2px solid white",
            marginLeft: "10px",
            height: "30px",
          }}
        >
          {name !== null ?  (name.result[0].name[0].toUpperCase()) : null}
        </Avatar>
        {name !== null ? (<h1 className="admin-name">{name.result[0].name.toUpperCase()}</h1>) : null}
        
      </div>
    </nav>
  );
};

export default Headers;
