import "./App.css";
import MovieList from "./MovieList.js";
import NavBar from "./NavBar.js";
import React from "react";
import { movies } from "./moviesData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies,
    });
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    if (movies[mid].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <NavBar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          subStars={this.handleDecStar}
          favFun={this.handleFav}
          cartFun={this.handleCart}
        />
      </>
    );
  }
}

export default App;
