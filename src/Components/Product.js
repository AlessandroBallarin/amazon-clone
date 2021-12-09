import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //Arrow function per aggiungere un prodotto nel carello all'interno dello state
  const addTobascket = () => {
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
      {/* Immagine del prodotto */}
      <img src={image} alt="" className="product__img" />

      {/* Informazioni
       * Titolo
       * Numero di stelle
       * Prezzo
       */}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <small>
            €<strong>{price}</strong>
          </small>
        </p>
      </div>
      <button onClick={addTobascket}>Add to basket</button>
    </div>
  );
}

export default Product;
