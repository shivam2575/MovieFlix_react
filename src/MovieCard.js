import React from "react";
const MovieCard = ({ movie, addStars, subStars, favFun, cartFun }) => {
  const { title, plot, price, rating, star, fav, isInCart } = movie;
  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img
            alt="poster"
            src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">{price}</div>

          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                onClick={() => subStars(movie)}
              />
              <img
                className="stars"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                onClick={() => addStars(movie)}
              />
              <span className="starCount">{star}</span>
            </div>
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => favFun(movie)}
            >
              {fav ? "Un - Fav " : "Fav"}
            </button>
            <button
              className={isInCart ? "rem-cart-btn" : "cart-btn"}
              onClick={() => cartFun(movie)}
            >
              {isInCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
