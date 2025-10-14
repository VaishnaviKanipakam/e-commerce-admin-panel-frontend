import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

const AddCategory = () => {
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryCount, setCategoryCount] = useState([]);
  const jwtToken = Cookies.get("jwt_token");

  const onChangeCategoryImage = (event) => {
    setCategoryImage(event.target.value);
  };

  const onChangeCategoryName = (event) => {
    setCategoryName(event.target.value);
  };

  const onChangeCategoryCount = (event) => {
    setCategoryCount(event.target.value);
  };

  const renderCategoryImage = () => {
    return (
      <div>
        <label htmlFor="categoryImage" className="add-category-lable">
          Category Image
        </label>
        <br />
        <input
          id="categoryImage"
          value={categoryImage}
          className="add-category-input"
          type="text"
          onChange={onChangeCategoryImage}
        />
      </div>
    );
  };

  const renderCategoryName = () => {
    return (
      <div>
        <label htmlFor="categoryName" className="add-category-lable">
          Category Name
        </label>
        <br />
        <input
          id="categoryName"
          value={categoryName}
          className="add-category-input"
          type="text"
          onChange={onChangeCategoryName}
        />
      </div>
    );
  };

  const renderItemCount = () => {
    return (
      <div>
        <label htmlFor="categoryCount" className="add-category-lable">
          Item Count
        </label>
        <br />
        <input
          id="categoryCount"
          value={categoryCount}
          className="add-category-input"
          type="number"
          onChange={onChangeCategoryCount}
        />
      </div>
    );
  };

  const onSubmitAddCategoryForm = async (event) => {
    event.preventDefault();
    const categoryDetails = { categoryImage, categoryName, categoryCount };

    const url = "http://localhost:3004/categories";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(categoryDetails),
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      setCategoryImage("");
      setCategoryName("");
      setCategoryCount("");
    }
  };

  return (
    <form className="add-category-form" onSubmit={onSubmitAddCategoryForm}>
      <h1 className="heading">Add Category</h1>
      <div>{renderCategoryImage()}</div>
      <div>{renderCategoryName()}</div>
      <div>{renderItemCount()}</div>
      <div className="buttons-container">
        <Button
          variant="contained"
          type="submit"
          style={{ marginTop: "20px", backgroundColor: "blue" }}
        >
          Add Category
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
    </form>
  );
};

export default AddCategory;
