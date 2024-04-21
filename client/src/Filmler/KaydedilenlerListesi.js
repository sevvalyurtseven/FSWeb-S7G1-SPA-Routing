import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <NavLink
          to={`/filmler/${movie.id}`}
          className={(isActive) => (isActive ? "saved-active" : "saved-movie")}
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <NavLink
        exact
        to="/"
        className={(isActive) => (isActive ? "hide" : "home")}
      >
        <button className="home-button">Anasayfa</button>
      </NavLink>
    </div>
  );
}
