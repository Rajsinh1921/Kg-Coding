import React from "react";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function Header() {
  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp style={{ fontSize: "20px" }} />
            Profile
          </div>

          <div className="action_container">
            <FaRegHeart style={{ fontSize: "20px" }} />
            Wishlist
          </div>

          <a className="action_container" href="pages/bag.html">
            <FaShoppingBag style={{ fontSize: "20px" }} />
            Bag
            <span className="bag-item-count">0</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
