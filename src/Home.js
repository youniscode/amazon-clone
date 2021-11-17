import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      </div>
      <div className="home__row">
        <Product
          id="154987132"
          title="Apple Iphone 13 pro max"
          price={1379.00}
          image="https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="25468879"
          title="Apple iPhone 13 (128 Go) - Blue"
          price={909}
          image="https://m.media-amazon.com/images/I/71dpTXFz+dL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="75438221"
          title="Apple iPhone 11 (64 Go) - White"
          price={589.00}
          image="https://m.media-amazon.com/images/I/71QE00iB9IL._AC_SL1500_.jpg"
          rating={5} />
        <Product
          id="87548752"
          title="Apple iPhone XS (256Go) - Gold"
          price={987.78}
          image="https://m.media-amazon.com/images/I/71R46ju5GzL._AC_SL1500_.jpg"
          rating={5} />
        <Product
          id="986587524"
          title="Apple iPhone 12 Mini (256 Go) - (Product) Red"
          price={1379}
          image="https://m.media-amazon.com/images/I/710VoHAhsjL._AC_SL1500_.jpg"
          rating={5} />
      </div>

      <div className="home__row">
        <Product
          id="12334566"
          title="ASUS TUF Gaming VG289Q1A - Monitor PC Gamer eSport 28  4K - Dalle IPS  Display Port"
          price={360}
          image="https://m.media-amazon.com/images/I/81j6TgA7JxL._AC_SL1500_.jpg"
          rating={5} />
      </div>

    </div>
  )
}

export default Home;
