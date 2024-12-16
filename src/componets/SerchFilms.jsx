
import { useFilmSearch } from "../contexts/filmsContext";
import React from 'react';


const FilmSearch = () => {
  const { query, setQuery, films, searchFilms, error } = useFilmSearch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Boolflix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
             
              aria-label="Search"
              
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca un film..."
            />
            <button  onClick={searchFilms}    className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

      {error && <p>{error}</p>}

      <div>
        {films.length > 0 ? (
          films.map((film) => (
            <div key={film.id}>
              <h3>{film.title}</h3>
              <p>Titolo Originale: {film.original_title}</p>
              <p>Lingua: {film.original_language}</p>
              <p>Voto: {film.vote_average}</p>
            </div>
          ))
        ) : (
          <p>Nessun film trovato</p>
        )}
      </div>
    </div>
  );
};

export default FilmSearch;
