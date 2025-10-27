import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import "./index.css";

const CartItemPage = (props) => {
  const { productDetails, getCartItems } = props;
  const {
    productId,
    productImage,
    productName,
    productPrice,
    productCategoryId,
    productQuantity,
    produtcType,
    userId,
  } = productDetails;
  const [productCount, setProductCount] = useState(productQuantity);
  const jwtToken = Cookies.get("jwt_token");

  const onClickIncrease = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  const onClickDecrease = () => {
    if (productCount > 0){
      setProductCount((prevCount) => prevCount - 1);
    }
  };

  const updateCartItem = async () => {
    const updatedCartItemDetails = {
      productCount, 
      productValue: productCount * productPrice,
      productCategoryId,
      produtcType,
      userId,
    };
    const url = `http://localhost:3004/update_cart_items?product_id=${productId}`;

    const options = {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(updatedCartItemDetails),
    };

    const response = await fetch(url, options);
    console.log("42CartItemPageResponse", response);
    if (response.ok === true) {
      getCartItems();
    }
  };

    const deleteCartItem = async () => {
      const url = `http://localhost:3004/delete_cart_item?product_id=${productId}&user_id=${userId}`;

      const options = {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      console.log("67CartItemPageDeleteCart", response);
      if (response.ok === true) {
        getCartItems();
      }
    };

  useEffect(() => {
    if (productCount === 0){
      deleteCartItem()
    }else{
      updateCartItem()
    }
  }, [productCount]);

  return (
    <li className="cart-item-container">
      <div className="product-img-name-container">
        <img src={productImage} alt={productName} className="cart-item-image" />
        <h5 className="product-name">{productName}</h5>
      </div>
      <div className="increase-decrese-container">
        <IconButton
          aria-label="remove"
          onClick={onClickDecrease}
          style={{
            color: "blue",
          }}
        >
          <RemoveIcon />
        </IconButton>
        <p className="product-count">{productCount}</p>
        <IconButton
          aria-label="add"
          onClick={onClickIncrease}
          style={{
            color: "blue",
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
      <h5 className="product-price">{productCount * productPrice} /-</h5>
    </li>
  );
};

export default CartItemPage;
