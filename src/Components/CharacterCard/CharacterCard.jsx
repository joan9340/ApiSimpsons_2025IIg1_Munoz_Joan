import React from "react";
import "./CharacterCard.css";

function CharacterCard({ character }) {
  //  Los datos del personaje
  const {
    id,
    name = "Desconocido",
    occupation = "Sin ocupación",
    gender = "No especificado",
    birthdate = "Sin fecha",
    age = "N/A",
    status = "Desconocido",
    phrases = [],
  } = character;

  //la URL de la imagen
  const imageUrl = `https://cdn.thesimpsonsapi.com/500/character/${id}.webp`;

  return (
    <div className="character-card">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        
      />

      <h3>{name}</h3>
      <p><strong>Ocupación:</strong> {occupation}</p>
      <p><strong>Edad:</strong> {age}</p>
      <p><strong>Género:</strong> {gender}</p>
      <p><strong>Nacimiento:</strong> {birthdate}</p>
      <p><strong>Estado:</strong> {status}</p>

      {/*Mostrar las primeras 3 frases */}
      {phrases.length > 0 && (
        <div className="phrases">
          <strong>Frases:</strong>
          <ul>
            {phrases.slice(0, 3).map((phrase, index) => (
              <li key={index}>“{phrase}”</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CharacterCard;
