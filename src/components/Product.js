import React from "react";
import "./Product.css";

function Products({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p><span role="img" aria-label="star">⭐</span></p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title} />
      <button className='product__button'>Add to Basket</button>
    </div>
  );
}

export default Products;
