import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./Components/CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Components/Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__leftSide">
        <img
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
          className="checkout__ad"
        />

        <h3>Hello, {user ? user?.email : "Guest"}</h3>
        <h2>Your Shopping basket</h2>
        <hr />
        {basket?.length === 0 ? (
          /* Avviso: il carello è vuoto */
          <div className="checkout__emptyBasket">
            <img
              src="https://m.media-amazon.com/images/G/29/cart/empty/kettle-desaturated._CB424694249_.svg"
              alt=""
              className="checkout__emptyImg"
            />
            <h2>Your Amazon basket is empty</h2>
          </div>
        ) : (
          <div>
            {/* Lista di tutti i prodotti */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
