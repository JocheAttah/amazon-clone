import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      // .orderBy("timestamp", "desc")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        //desc means descending by timstamp value from firebase
        const postsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setPosts(postsData);
      });
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        alt="Hero"
      />

      <div className="home__row">
        {posts.slice(0,3).map(({ id, post }) => (
          <Product
            key={id}
            id={id}
            title={post.title}
            price={post.price}
            rating={post.rating}
            image={post.image}
          />
        ))}
      </div>
      <div className="home__row">
        {posts.slice(3,5).map(({ id, post }) => (
          <Product
            key={id}
            id={id}
            title={post.title}
            price={post.price}
            rating={post.rating}
            image={post.image}
          />
        ))}
      </div>
      <div className="home__row">
        {posts.slice(5).map(({ id, post }) => (
          <Product
            key={id}
            id={id}
            title={post.title}
            price={post.price}
            rating={post.rating}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}

{
  /* <Product
          id={1234556}
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
          price={348.0}
          rating={5}
          image="https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=440"
        />
        <Product
          id={55648839}
          title="
Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for phone-call, Blue (Amazon Exclusive) (WHCH710N/L)"
          price={98.25}
          rating={4}
          image="https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw164777fa/images/WHCH710NL/WHCH710NL.png"
        /> */
}
{
  /* </div> */
}
{
  /* <div className="home__row">
        <Product
          id={7578363780}
          title="Bose SoundLink Color Bluetooth Speaker II - Soft Black"
          price={129.99}
          rating={5}
          image="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_color_ii/product_silo_images/soundlink_color_ii_black_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png"
        />
        <Product
          id={75840383384}
          title="Sonos Move - Battery-powered Smart Speaker, Wi-Fi and Bluetooth with Alexa built-in - Black​​​​​​​"
          price={191.96}
          rating={4}
          image="https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/400076-smart-speakers-sonos-move-10009083.png"
        />
        <Product
          id={24638404440}
          title="Bose SoundLink Revolve, Portable Bluetooth Speaker (with 360 Wireless Surround Sound), Triple Black"
          price={121.96}
          rating={3}
          image="https://dalooni.com/image/cache/catalog/BOSE/739523-5110-1-550x550w.png"
        />
      </div>
      <div className="home__row">
        <Product
          id={3663939}
          title="
Sony X900H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
          price={1551.96}
          rating={4}
          image="https://lh3.googleusercontent.com/proxy/lzPUIFOAHZSgR1KQ9f_kfhT1MkkwPC5mXi4rlfTt-eRDnTAGZzQuZCcmYLtVKQEIyuygexW4LnHnxqWZhmvguuIUXfIIHP9f3tDDJrNT4qRyJWVhpGvWyVFwqBgZvH3Mu7-xBSJRuNP7WF7b4q6Abio"
        />
      </div> */
}
{
  /* </div> */
}
{
  /* );
} */
}

export default Home;
