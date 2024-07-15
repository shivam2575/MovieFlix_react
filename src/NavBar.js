import React from "react";
import styleNav from "./navbar.module.css";

class NavBar extends React.Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <div className={styleNav.nav}>
          <div className={styleNav.title}>MOVIE-FLIX</div>
          <div className={styleNav.cartIconContainer}>
            <img
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              className={styleNav.cartImg}
            />
            <span className={styleNav.cartCount}>{cartCount}</span>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
