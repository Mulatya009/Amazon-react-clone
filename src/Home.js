import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="122332"
          title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum"
          price={897.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81fBqHkXSoL._AC_UL270_SR270,270_.jpg"
        />
        <Product
          id="2332"
          title="SHARE THIS PRODUCT. Eako Disposable Protective Face Mask 3ply 50pcs Pack"
          price={549}
          rating={5}
          image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/340203/1.jpg?1319"
        />
      </div>

      <div className="home__row">
        <Product
          id="12232"
          title="Vitron HOME THEATER BLUETOOTH SPEAKER SUB-WOOFER SYSTEM 3.1 CH 10000W"
          price={6800}
          rating={3}
          image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/010362/1.jpg?7613"
        />
        <Product
          id="122332"
          title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum"
          price={897.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81fBqHkXSoL._AC_UL270_SR270,270_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="2332"
          title="SHARE THIS PRODUCT. Eako Disposable Protective Face Mask 3ply 50pcs Pack"
          price={549}
          rating={5}
          image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/340203/1.jpg?1319"
        />
      </div>
    </div>
  );
}
export default Home;
