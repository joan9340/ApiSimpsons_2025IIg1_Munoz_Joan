import React from "react";

/*
  Componente que muestra una tarjeta con información del episodio.
  Los datos vienen desde el componente Episodes.jsx 
*/
function EpisodeCard({ episode }) {
  // Desestructuramos los datos del episodio (con valores por defecto si falta alguno)

  const {
    id = "Sin id",
    name = "Sin título",
    season = "N/A",
    episode_number = "N/A",
    airdate = "Desconocida",
    synopsis = "Sin descripción disponible.",
    image_path,
  } = episode;

  //  URL completa de la imagen usando el CDN oficial
  const imageUrl = `https://cdn.thesimpsonsapi.com/200${image_path}`;

  return (
    <div className="episode-card">
      {/* Imagen del episodio */}
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"

      />

      {/* Nombre del episodio */}

      <h3>{name}</h3>

      {/* Información detallada */}
      <p><strong> Número id:</strong> {id}</p>
      <p><strong>Temporada:</strong> {season}</p>
      <p><strong>Episodio N°:</strong> {episode_number}</p>
      <p><strong>Fecha de emisión:</strong> {airdate}</p>
      <p><strong>Sinopsis:</strong> {synopsis}</p>
    </div>
  );
}

export default EpisodeCard;
