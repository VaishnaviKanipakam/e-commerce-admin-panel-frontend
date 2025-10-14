import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryItemDetailedItem from "../CategoryItemDetailedItem";
import SideBarItems from "../SideBarItems";
import Headers from "../Headers";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import "./index.css";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Cookies from "js-cookie";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryItemDetailedPage = () => {
  const params = useParams();
  console.log("8CategoryDetailedPagecategoryId", params.id);
  const [categoryDetailsList, setCategoryDetailsList] = useState([]);
  const [addCategoryImage, setAddCategoryImage] = useState("");
  const [addCategoryName, setAddCategoryName] = useState("");
  const [addCategoryCount, setAddCategoryCount] = useState([]);
  const [addCategoryType, setAddCategoryType] = useState("");
  const jwtToken = Cookies.get("jwt_token");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCategoryDetailsList = async () => {
    console.log("16CategoryDetailedPagecategoryId", params.id);
    const url = `http://localhost:3004/get_each_category_list?category_id=${params.id}`;
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(url, options);
    console.log("18CategoryDetailedPageResponse", response);
    if (response.ok === true) {
      const data = await response.json();
      console.log("22CategoryDetailedPagedata", data);
      const updatedData = data.map((eachCategory) => ({
        eachCategoryId: eachCategory.each_category_id,
        categoryImage: eachCategory.category_image,
        categoryName: eachCategory.category_name,
        itemCount: eachCategory.item_count,
        categoryType: eachCategory.category_type,
      }));
      setCategoryDetailsList(updatedData);
    }
  };

  const onSubmitAddCategoryTypeForm = async (event) => {
    event.preventDefault();
    const addCategoryTypeDetails = {
      addCategoryType,
      addCategoryImage,
      addCategoryName,
      addCategoryCount,
    };
    const url = `http://localhost:3004/add_category_type?category_id=${params.id}`;

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(addCategoryTypeDetails),
    };

    const response = await fetch(url, options);
    console.log("91CategoryItemDetailedPageResponse", response);
    if (response.ok === true) {
      getCategoryDetailsList();
      setAddCategoryImage("");
      setAddCategoryName("");
      setAddCategoryType("");
      setAddCategoryCount("");
    }
  };

  useEffect(() => {
    getCategoryDetailsList();
  }, []);
  console.log("36", categoryDetailsList);

  return (
    <div className="category-item-detailed-page-container">
      <Headers />
      <div className="detailed-page-bottom-container">
        <div className="side-menu-bar-container">
          <SideBarItems />
        </div>
        <div className="category-type-container">
          <div className="add-back-buttons-container">
            <Button
              variant="contained"
              onClick={handleClickOpen}
              style={{ backgroundColor: "blue" }}
            >
              <AddOutlinedIcon /> Add Category
            </Button>
            <Link to="/dashboard">
              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  backgroundColor: "blue",
                  marginLeft: 6,
                }}
              >
                Back
              </Button>
            </Link>
          </div>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Add Category Type</DialogTitle>
            <form onSubmit={onSubmitAddCategoryTypeForm}>
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
                  value={addCategoryImage}
                  onChange={(event) => setAddCategoryImage(event.target.value)}
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
                  value={addCategoryName}
                  onChange={(event) => setAddCategoryName(event.target.value)}
                />
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="categotyCount"
                  name="categoryCount"
                  label="Category Count"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={addCategoryCount}
                  onChange={(event) => setAddCategoryCount(event.target.value)}
                />
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="categoryType"
                  name="categoryType"
                  label="Category Type"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={addCategoryType}
                  onChange={(event) => setAddCategoryType(event.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} type="submit">
                  Add
                </Button>
              </DialogActions>
            </form>
          </Dialog>

          <ul className="categories-list-conatiner">
            {categoryDetailsList.map((eachCategory) => (
              <CategoryItemDetailedItem
                key={eachCategory.eachCategoryId}
                eachCategoryDetails={eachCategory}
                getCategoryDetailsList={getCategoryDetailsList}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemDetailedPage;
