import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import fondo from "../../assets/fondo_paginas.jpg";
import Error404 from "../../Components/Error_404/Error_404";

import './Locations.css'

function Locations() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`);
        if (!res.ok) throw new Error("Error al obtener los lugares");
        const json = await res.json();
        setData(json);
        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLocations();

  }, [page]);

  if (loading) return <Loader />;

  if (error) return <p>{error}</p>;

  if (!data) return <p>No hay datos disponibles</p>;

  //Imagen error 404 
  if (!data.results || data.results.length === 0) {
    return <Error404 mensaje="No se encontraron Lugares." />;
  }


  const { results, next, prev, pages } = data;

  return (
    <div className="locations-container"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
        minHeight: "100%",
        padding: "2rem 0",
      }}
    >

      <h2>Lugares de Springfield</h2>

      <div className="locations-grid">
        {results && results.length > 0 ? (
          results.map((loc) => (
            <div key={loc.id} className="location-card">
              <img
                src={`https://cdn.thesimpsonsapi.com/200${loc.image_path}`}
                alt={loc.name}
                loading="lazy"
              />

              <h3>{loc.name}</h3>
              <p><strong>Ciudad:</strong> {loc.town || "Desconocida"}</p>
              <p><strong>Uso:</strong> {loc.use || "Sin información"}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron lugares.</p>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={!prev}
        >
          Anterior
        </button>

        <span>Página {page} de {pages}</span>

        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={!next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Locations;
