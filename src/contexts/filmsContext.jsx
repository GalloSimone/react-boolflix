import React, { createContext, useState, useContext } from 'react';


const FilmSearchContext = createContext();


export const useFilmSearch = () => {
  return useContext(FilmSearchContext);
};


export const FilmSearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  
  const searchFilms = async () => {
    const apiKey = 'VITE_TMDB_API_KEY'; 
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setFilms(data.results);
      } else {
        setFilms([]);
      }
    } catch (err) {
      setError('Errore nella ricerca. Riprova.');
    }
  };

  return (
    <FilmSearchContext.Provider value={{ query, setQuery, films, searchFilms, error }}>
      {children}
    </FilmSearchContext.Provider>
  );
};
