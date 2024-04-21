import React from "react";
import { Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to="/">
        <button className="home-button">Anasayfa</button>
      </Link>
    </div>
  );
}
