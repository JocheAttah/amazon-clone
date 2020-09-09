import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2018/occ/birthday/occheader_birthday_2.jpg"
          alt="Advert"
          className="checkout__ad"
        />
        <div className="">
            <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
