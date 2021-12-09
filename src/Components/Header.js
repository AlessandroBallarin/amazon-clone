import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    } else return;
  };

  return (
    <div className="header">
      {/* Logo Amazon */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Barra di ricerca */}
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Opzioni profilo */}
      <div className="header__nav">
        {/* Se sei loggato disconnettiti altrimenti vai alla pagina di login*/}
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionFirstLine">Hello Guest</span>
            <span className="header__optionSecondLine">
              {/* Se sei loggato mostra Sign Out altrimenti mostra Sign In */}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* Lista degli ordini */}
        <Link to="/">
          <div className="header__option">
            <span className="header__optionFirstLine">Return</span>
            <span className="header__optionSecondLine">& Orders</span>
          </div>
        </Link>

        {/* Informazioni amazon prime */}
        <Link to="/">
          <div className="header__option">
            <span className="header__optionFirstLine">Your</span>
            <span className="header__optionSecondLine">Prime</span>
          </div>
        </Link>
      </div>

      {/* Carrello */}
      <Link to="/checkout">
        <div className="header__basket">
          <ShoppingBasketIcon className="header_basketIcon" />
          <span className="header__bascketCounter">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
