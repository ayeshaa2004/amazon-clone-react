import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../Context/StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        decimalScale={2}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length ?? 0} items): <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  ); 
}

export default Subtotal;
