import React from "react";
import "./Payment.css";
import { useStateValue } from "./components/StateProvider";
import CheckoutProduct from "./components/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__itemNo">
          Checkout(
          <Link className="payment__link" to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* payment section- address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Lagos, NG</p>
          </div>
        </div>
        {/* payment section- review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                className="payment__prod"
              />
            ))}
          </div>
        </div>
        {/* payment section- payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe stuff */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
