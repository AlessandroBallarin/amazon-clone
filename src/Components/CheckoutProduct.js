import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //Rimuove gli oggetti dal carello
  const removeFrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutproduct__image">
        <img src={image} alt="" />
      </div>
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__">
          <small>
            €<strong>{price}</strong>
          </small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFrombasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
