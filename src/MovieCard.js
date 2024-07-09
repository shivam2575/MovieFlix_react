import React from "react";
class MovieCard extends React.Component {
  addStars = () => {
    if (this.state.stars >= 5) {
      alert("cant give more than 5 stars...!!!");
    } else {
      this.setState({
        stars: this.state.stars + 0.5,
      });
    }
  };
  subStars = () => {
    if (this.state.stars <= 0) {
      alert("cant give less than 0 stars...!!!");
    } else {
      this.setState({
        stars: this.state.stars - 0.5,
      });
    }
  };
  handleFav() {
    this.setState({
      fav: !this.state.fav,
    });
  }
  handleCart() {
    this.setState({
      inCart: !this.state.inCart,
    });
  }
  render() {
    const { title, plot, price, rating, stars, fav, inCart } =
      this.props.movies;
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
                  onClick={this.subStars}
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
                  onClick={this.addStars}
                />
                <span className="starCount">{stars}</span>
              </div>
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Un - Fav " : "Fav"}
              </button>
              <button
                className={inCart ? "rem-cart-btn" : "cart-btn"}
                onClick={this.handleCart}
              >
                {inCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
