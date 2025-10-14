import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import fondo from "../../assets/fondo_paginas.jpg";
//Error 404
import Error404 from "../../Components/Error_404/Error_404";



function Characters() {
  // Estados
  const [data, setData] = useState(null); // guarda la respuesta completa de la API
  const [page, setPage] = useState(1);    // página actual
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // texto para filtrar personajes

  //  Cargar personajes desde la API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
        if (!res.ok) throw new Error("Error al obtener personajes");
        const json = await res.json();
        console.log(" Personajes recibidos:", json);
         setData(json);
      

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  // Render condicional
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No hay datos.</p>;

  //Imagen error 404 
  if (!data.results || data.results.length === 0) {
  return <Error404 mensaje="No se encontraron personajes." />;
}

  // Extraer resultados
  const characters = data.results || [];

  // Filtrar por nombre
  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="characters-container"
      style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: "contain",
    backgroundPosition: "top center",
    backgroundRepeat: "repeat-y",
    minHeight: "100%",
    padding: "2rem 0",
      }}
      >
      
      <h2>Personajes de The Simpsons</h2>

      {/* Barra de búsqueda */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem 0.75rem",
            width: "240px",
            borderRadius: "8px",
            border: "1px solid #7198f3ff",
          }}
        
        />
      </div>

      {/* Grid de personajes */}
      <div className="characters-grid">
        {filtered.length > 0 ? (
          filtered.map((char) => <CharacterCard key={char.id} character={char} />)
        ) : (
          <p>No se encontraron personajes con ese nombre.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="pagination" style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={!data.prev}
        >
          ◀ Anterior
        </button>
        <span style={{ margin: "0 12px", style:"bold" }}>
          Página {page} de {data.pages}
        </span>
        <button onClick={() => setPage((p) => p + 1)} disabled={!data.next}>
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}

export default Characters;
