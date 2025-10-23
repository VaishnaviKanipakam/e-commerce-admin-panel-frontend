import React, { useState } from "react";
import Button from "@mui/material/Button";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Cookies from "js-cookie";
import "./index.css";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryItemDetailedItem = (props) => {
  const { eachCategoryDetails, getCategoryDetailsList } = props;
  const { eachCategoryId, categoryImage, categoryName, itemCount } =
    eachCategoryDetails;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [editCategoryTypeImage, setEditCategoryTypeImage] = useState("");
  const [editCategoryTypeName, setEditCategoryTypeName] = useState("");
  const [editCategoryTypeCount, setEditCategoryTypeCount] = useState("");
  const [editCategoryType, SetEditCategoryType] = useState("");
  const jwtToken = Cookies.get("jwt_token");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitEditCategoryTypeForm = async (event) => {
    event.preventDefault();
    const ulr = `http://localhost:3004/edit_catgory_type?each_category_type_id=${eachCategoryId}`;
    const editCategoryTypeDetails = {
      editCategoryTypeImage,
      editCategoryTypeName,
      editCategoryTypeCount,
      editCategoryType,
    };

    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(editCategoryTypeDetails),
    };

    const response = await fetch(ulr, options);
    console.log("54CategoryItemDetailedItemResponse", response);
    if (response.ok === true) {
      getCategoryDetailsList();
      setEditCategoryTypeImage("");
      setEditCategoryTypeName("");
      setEditCategoryTypeCount("");
      SetEditCategoryType("");
    } 
  };

  return (
    <li className="category-item-container">
      <div
        className="image-container"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img
          src={categoryImage}
          alt={categoryName}
          className="category-image"
        />
        {isMouseOver && (
          <Button
            onClick={handleClickOpen}
            type="button"
            variant="contained"
            style={{
              backgroundColor: "blue",
              position: "absolute",
              left: "50px",
              top: "50px",
            }}
          >
            <BorderColorOutlinedIcon /> Edit
          </Button>
        )}
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit Category Type</DialogTitle>
        <form onSubmit={onSubmitEditCategoryTypeForm}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="categoryimage"
              label="Category Image"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryTypeImage}
              onChange={(event) => setEditCategoryTypeImage(event.target.value)}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="categoryName"
              label="Category Name"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryTypeName}
              onChange={(event) => setEditCategoryTypeName(event.target.value)}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="categoryCount"
              label="Category Count"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryTypeCount}
              onChange={(event) => setEditCategoryTypeCount(event.target.value)}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="categoryType"
              label="Category Type"
              type="text"
              fullWidth
              variant="standard"
              value={editCategoryType}
              onChange={(event) => SetEditCategoryType(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Edit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <h1 className="category-name">{categoryName}</h1>
      <p className="item-count">{itemCount} items</p>
    </li>
  );
};

export default CategoryItemDetailedItem;
