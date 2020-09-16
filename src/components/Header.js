import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'

function Header() {
  const [{ basket, user }] = useStateValue();
  // const [{ basket, user  }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div onClick={handleAuth} className="header__option">
            <span className="header__option--one"></span>
            <span className="header__option--one"> Hello {user?.email || 'Guest'}</span>
            {/* <span className="header__option--one"> Hello {!user ? 'Guest' : user.email}</span> */}
            <span className="header__option--two">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__option--one"> Returns</span>
            <span className="header__option--two">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option--one"> Your</span>
            <span className="header__option--two"> Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__Basket" />
            <span className="header__option--two header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
