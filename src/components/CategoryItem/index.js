import React, { useState } from "react";
import Button from "@mui/material/Button";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./index.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryItem = (props) => {
  const { categoryDetails, getCategoriesList } = props;
  const { categoryId, categoryImage, categoryName, itemCount } =
    categoryDetails;
  const jwtToken = Cookies.get("jwt_token");
  const [open, setOpen] = useState(false);
  const [editCategoryImage, setEditCategoryImage] = useState("");
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategoryCount, setEditCategoryCount] = useState([]);
  const decoded = jwtDecode(jwtToken)

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const onSubmitEditModalForm = async (event) => {
    event.preventDefault();
    const editCategoryDetails = {
      editCategoryImage,
      editCategoryName,
      editCategoryCount,
    };
    const url = `http://localhost:3004/edit_category?category_id=${categoryId}`;

    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(editCategoryDetails),
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      getCategoriesList();
      setEditCategoryImage("");
      setEditCategoryName("");
      setEditCategoryCount("");
      const data = response.json();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   const navigate = useNavigate();

// const handleNavigate = () => {
//   navigate(`/category-item-detailed-page/${categoryId}`);
// };

  // console.log("68CategooryItemId", categoryId)


  return (
    <li
      className="category-item-container"
    >
      <Link to={`/category-item-detailed-page/${categoryId}`}>
        <img
          src={categoryImage}
          alt={categoryName}
          className="category-image"
          //  onClick={handleNavigate}
          //  style={{ cursor: "pointer" }}  
        />
      </Link>
     {decoded.userType === "admin" ? 
     ( <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={false}
        onClose={handleClose}
      >
        <form onSubmit={onSubmitEditModalForm}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
           
            <TextField
              autoFocus
              required
              margin="dense"
              id="categotyImage"
              name="categoryImage"
              label="Category Image"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryImage}
              onChange={(event) => setEditCategoryImage(event.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="categotyName"
              name="categoryName"
              label="Category Name"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryName}
              onChange={(event) => setEditCategoryName(event.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="categoryCount"
              name="categoryCount"
              label="Category Count"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryCount}
              onChange={(event) => setEditCategoryCount(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button  type="button" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Edit
            </Button>
          </DialogActions>
        </form>
      </Dialog>) : null }
      <div className="edit-button-category-name-count-container">
        <div>
          <h1 className="category-name">{categoryName}</h1>
          <p className="item-count">{itemCount} items</p>
        </div>
        {decoded.userType === "admin" ? (
        <div> 
          <Button
           type="button"
            onClick={handleClickOpen}
            style={{
              backgroundColor: "transparent",
              marginLeft: 10,
              height: "fitContent",
              border: "none",
            }}
          >
            <BorderColorOutlinedIcon style={{ color: "blue" }} />
          </Button>
        </div>
        ) : null}
      </div>
    </li>
  );
};

export default CategoryItem;
