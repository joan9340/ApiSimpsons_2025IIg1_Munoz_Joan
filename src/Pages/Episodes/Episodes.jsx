import React, { useEffect, useState, useMemo } from "react";
import Loader from "../../Components/Loader/Loader";
import EpisodeCard from "../../Components/EpisodeCard/EpisodeCard";
import fondo from "../../assets/fondo_paginas.jpg";
import Error404 from "../../Components/Error_404/Error_404";

function Episodes() {
  // Estados y hooks
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Efecto para cargar episodios
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://thesimpsonsapi.com/api/episodes?page=${page}`
        );
        const json = await res.json();
        console.log(" Datos de episodios:", json);

 
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [page]);

  // Variables derivadas (fuera de condicionales)
  const episodes = useMemo(() => data?.results || [], [data]);

  const seasons = useMemo(() => {
    const s = new Set();
    episodes.forEach((ep) => {
      const seasonVal =
        ep.season ?? ep.seasonNumber ?? ep.season_number ?? null;
      if (seasonVal != null) s.add(String(seasonVal));
    });
    return Array.from(s).sort((a, b) => Number(a) - Number(b));
  }, [episodes]);

  const filtered = episodes.filter((ep) => {
    const name =
      ep.name ??
      ep.title ??
      ep.episodeName ??
      ep.titleName ??
      ep.name_original ??
      "";
    const seasonVal = ep.season ?? ep.seasonNumber ?? ep.season_number ?? "";
    if (seasonFilter !== "all" && String(seasonVal) !== String(seasonFilter))
      return false;
    if (
      search.trim() !== "" &&
      !name.toLowerCase().includes(search.trim().toLowerCase())
    )
      return false;
    return true;
  });

  //Render 
  if (loading) return <Loader />;
  if (error) return <p style={{ textAlign: "center" }}>{error}</p>;
  if (!data) return <p style={{ textAlign: "center" }}>No hay datos.</p>;

    //Imagen error 404 
  if (!data.results || data.results.length === 0) {
  return <Error404 mensaje="No se encontraron Episodios." />;
}


  return (
    <div className="episodes-container"
      style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: "contain",
    backgroundPosition: "top center",
    backgroundRepeat: "repeat-y",
    minHeight: "100%",
    padding: "2rem 0",
      }}
      >
      <h2>Episodios de The Simpsons</h2>

      {/* Controles */}
      <div className="episodes-controls" style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem 0.75rem", width: 240, marginRight: 12 }}
        />

        <select
          value={seasonFilter}
          onChange={(e) => setSeasonFilter(e.target.value)}
          style={{ padding: "0.5rem 0.75rem" }}
        >
          <option value="all">Todas las temporadas</option>
          {seasons.map((s) => (
            <option key={s} value={s}>
              Temporada {s}
            </option>
          ))}
        </select>
      </div>

      {/*Grid de episodios */}
      <div className="episodes-grid">
        {filtered.length > 0 ? (
          filtered.map((ep) => <EpisodeCard key={ep.id} episode={ep} />)
        ) : (
          <p>No se encontraron episodios.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="pagination" style={{ marginTop: 18 }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={!data.prev}
        >
           Anterior
        </button>

        <span style={{ margin: "0 12px" }}>
          Página {page} de {data.pages}
        </span>

        <button onClick={() => setPage((p) => p + 1)} disabled={!data.next}>
          Siguiente 
        </button>
      </div>
    </div>
  );
}

export default Episodes;

