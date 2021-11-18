import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";




export default function Header() {
  return (
    <div className="header">
      
        <img className="header__logo" src="https://www.sahirkarani.com/images/amazon.png" alt="logo_amazon" />
      



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

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__optionCount">0</span>
        </div>



      </div>
    </div >

  );
};


