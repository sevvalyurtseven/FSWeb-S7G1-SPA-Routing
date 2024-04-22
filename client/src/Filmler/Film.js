import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import FilmCard from "./FilmCard";

export default function Film(props) {
  const [movie, setMovie] = useState();

  let { id } = useParams();
  // URL'den alınan :id parametresini bu değişkene aktarın

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) // Bu uç noktayı Postman'le çalışın
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
        // Bu kısmı log statementlarıyla çalışın
        // ve burdan gelen response'u 'movie' e aktarın
      })
      .catch((error) => {
        console.error(error);
      });
    // Bu effect her `id ` değiştiğinde çalışmalı
    // Bunu nasıl gerçekleştirebiliriz?
  }, [id]);

  // Yalnızca esnek görevlere geçtiğinizde burdaki yorum etiketini kaldırın
  // const filmiKaydet = evt => { }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  return (
    <div className="save-wrapper">
      <FilmCard movie={movie} />
      <button
        className="save-button"
        onClick={() => props.KaydedilenlerListesineEkle(movie)}
      >
        Kaydet
      </button>
    </div>
  );
}
