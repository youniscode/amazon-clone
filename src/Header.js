import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";







export default function Header() {

  return (
    <div className="header">

      <a href="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo_amazon" />
      </a>



      {/*SEARCH BAR*/}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__serachIcon" />
      </div>

      <div className="header__nav">

        <div className="header__option">
          <span className="header__optionLineOn">Hello Guest</span>
          <span className="header__optionLineTw"> Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineTw">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOn">Your</span>
          <span className="header__optionLineTw">Prime</span>
        </div>
        <a href="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__optionCount">0</span>
          </div>
        </a>
      </div>

    </div >

  );
};


