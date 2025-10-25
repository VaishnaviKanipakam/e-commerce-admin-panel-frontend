import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import "./index.css";

const CartItemPage = (props) => {
  const { productDetails } = props;
  const { productId, productImage, productName, productPrice, productCategoryId} = productDetails;
  const [productCount, setProductCount] = useState(0)
  const [productValue, setProductValue] = useState(productPrice)

const onClickIncrease = () => {
    setProductCount((prevCount) => prevCount + 1)
    setProductValue((prevValue) => prevValue + productPrice)
}

const onClickDecrease = () => {
    setProductCount((prevCount) => prevCount - 1)
    setProductValue((prevValue) => prevValue - productPrice)
}

  return (
    <li className="cart-item-container">
      <div className="product-img-name-container">
        <img src={productImage} alt={productName} className="cart-item-image" />
        <h5 className="product-name">{productName}</h5>
      </div>
      <div className="increase-decrese-container">
        <IconButton aria-label="remove" onClick={onClickDecrease}  style={{
            color: "blue"
        }}>
          <RemoveIcon />
        </IconButton>
        <p className="product-count">{productCount}</p>
        <IconButton aria-label="add" onClick={onClickIncrease} style={{
            color: "blue"}}>
          <AddIcon />
        </IconButton>
      </div>
      <h5 className="product-price">{productValue} /-</h5>
    </li>
  );
};

export default CartItemPage;
