import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./components/StateProvider";
import CheckoutProduct from "./components/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./components/reducer";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const element = useElements();


  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("")
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate a special stripe secret which will allow us charge a custommer
  },[basket])

  const handleSubmit = async (e) => {
    // stripe stuff
    e.preventDefault();
    setProcessing(true);

    // const payload = await stripe
  };

  const handleChange = (e) => {
    // listen for changes in the card element
    // & dislay any errors as the customer types n detail
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__itemNo">
          Checkout(
          <Link className="payment__link" to="/checkout">
            {basket.length} items
          </Link>
          )
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
          <div className="payment__details">
            {/* stripe stuff */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
