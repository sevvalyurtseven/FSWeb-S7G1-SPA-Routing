import React from "react";
import { Link } from "react-router-dom";
import FilmCard from "./FilmCard";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  return (
    <Link to={`/filmler/${props.movie.id}`}>
      <FilmCard movie={props.movie} />
    </Link>
  );
}
