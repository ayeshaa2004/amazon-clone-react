import React, { useState } from "react";
import "./Product.css";
// import { useStateValuee } from "../Context/Infocontext";
import { useStateValue } from "../Context/StateProvider";

function Product({ id, title, image, price, rating }) {
  // const { setTotal } = useStateValuee();

  const [{ basket }, dispatch] = useStateValue();

  const addedtobasket = (productPrice) => {
    // setCount(count + 1);
    // setTotal((prevtotal) => prevtotal + productPrice.price);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating) //Array(rating) => creates an empty array equal to the value of rating
            .fill() //this fills the array so that the map can work  [undefined,undefined,undefined]
            .map(
              (
                _,
                i, //Loops over the array once for each element._ → current value (unused, so we write _ ) i → index (0, 1, 2, ...)
              ) => (
                <p>⭐</p> //Each loop returns:
              ),
            )}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={() => addedtobasket({ price })}>Add to Basket</button>
    </div>
  );
}

export default Product;
