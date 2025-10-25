import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import CartItemPage from "../CartItemPage";

import "./index.css";

const Cart = () => {
  const [cartItemsList, setCatrItemsList] = useState([]);
  const jwtToken = Cookies.get("jwt_token");
  const decode = jwtDecode(jwtToken);
  const userId = decode.id;

  const getCartItems = async () => {
    const url = `http://localhost:3004/get_cart_items?user_id=${userId}`;

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
        }
    }
    const response = await fetch(url, options);
    console.log("25CartResponse", response);
    if(response.ok === true){
        const successData = await response.json();
        console.log("28CartsuccessData", successData)
        const updatedSuccessData = successData.map(eachItem => ({
            productId: eachItem.cart_product_id,
            productImage: eachItem.product_image,
            productName: eachItem.product_name,
            productPrice: eachItem.product_price,
            produtcType: eachItem.product_type,
            productCategoryId: eachItem.each_category_id

    }))
    setCatrItemsList(updatedSuccessData);
    }else if (response.ok === false){
        const failData = await response.json()
        console.log("39CartFailData", failData)
    }
  };
console.log("42cart", cartItemsList.length)

  useEffect(() => {
        getCartItems()
    }, [])

  return (
  <div className="cart-container">
    <h1 className="cart-heading">Welcome to cart</h1>
    <ul className="cart-items-ul-container">
        {cartItemsList.map(eachCartItem => ((
            <CartItemPage key={eachCartItem.productId} productDetails={eachCartItem}/>
        )))}
    </ul>
  </div>
)
};

export default Cart;
