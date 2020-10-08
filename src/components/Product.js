import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    
 
    // console.log('this is the basket >>>', basket);   
    
    const addToBasket = () => {
        // disptach the iteem intothe datatlayer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,   
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
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><span role="img" aria-label="star">⭐</span></p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title} />
      <button className='product__button' onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
