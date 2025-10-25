import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { Link } from "react-router-dom";
import "./index.css";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Headers = () => {
  const name = JSON.parse(localStorage.getItem("user"));
  console.log("13headers", name);
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
        <Link to="/cart">
        <IconButton style={{ marginRight: "10px" }}>
          <ShoppingCartIcon fontSize="small" style={{ color: "#ffffff" }} />
          <CartBadge
            badgeContent={2}
            color="primary"
            overlap="circular"
            style={{ backgroundColor: "2E27F5", color: "#ffffff" }}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#2E27F5",
                color: "white",
              },
            }}
          />
        </IconButton>
      </Link>
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
          {name !== null ? name.result[0].name[0].toUpperCase() : null}
        </Avatar>
        {name !== null ? (
          <h1 className="admin-name">{name.result[0].name.toUpperCase()}</h1>
        ) : null}
      </div>
    </nav>
  );
};

export default Headers;
