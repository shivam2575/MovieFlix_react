import React from "react";
import MovieCard from "./MovieCard";
class MovieList extends React.Component {
  render() {
    const { movies, addStars, subStars, favFun, cartFun } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addStars={addStars}
            subStars={subStars}
            favFun={favFun}
            cartFun={cartFun}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
