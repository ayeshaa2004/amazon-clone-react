import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
// import { useStateValuee } from "../Context/Infocontext";
import { useStateValue } from "../Context/StateProvider";
import CheckOutProduct from "./CheckOutProduct";

function CheckoutPage() {
  // const { total } = useStateValuee();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__basket">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/*CheckOut Product */}
          {/*CheckOut Product */}
          {/*CheckOut Product */}
          {/*CheckOut Product */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
