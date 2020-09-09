import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        alt="Hero"
      />
      <div className="home__row">
        <Product
          id={1234556}
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
          price={348.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg"
        />
        <Product
          id={55648839}
          title="
Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for phone-call, Blue (Amazon Exclusive) (WHCH710N/L)"
          price={98}
          rating={4}
          image="https://m.media-amazon.com/images/I/511G0DPMuQL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={7578363780}
          title="Bose SoundLink Color Bluetooth Speaker II - Soft Black"
          price={129}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Xg3PvaiQL._AC_UY218_.jpg"
        />
        <Product
          id={75840383384}
          title="Sonos Move - Battery-powered Smart Speaker, Wi-Fi and Bluetooth with Alexa built-in - Black​​​​​​​"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/91Ckx1BIckL._AC_UY218_.jpg"
        />
        <Product
          id={24638404440}
          title="Bose SoundLink Revolve, Portable Bluetooth Speaker (with 360 Wireless Surround Sound), Triple Black"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81ipKYwWZBL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3663939}
          title="
Sony X900H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SL1080_.jpg"
        />
        
      </div>
    </div>
  );
}

export default Home;
