import { createContext, useContext } from "react";
const GlobalContext=createContext();

export const GlobalContextProvider=({ children })=>{
     const apiUrl='https://api.themoviedb.org/3'
   
   
      const fetchMovies = (term)=>{
        const fetchConfig={
            method:'GET',
            headers:{
             Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlmNmYyNTAzMDFjYWZkNmUyMWEzNzAzMzdhMTFiNSIsIm5iZiI6MTczNDM0NzA4Ny4wNzMsInN1YiI6IjY3NjAwOTRmNWJkNjZhNWU1ODEzMTA4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aNoafuCLUcPPobXGh_etqtTY54syTOZGuFOgRDr8SSg"
            }
            

        };
    fetch(`${apiUrl}/search/movie?query=${term}`, fetchConfig)

    alert('hai cercat:' +term)
   }
   
    const globalData={
      
        movies:[],
        searchMovie: fetchMovies,
        series:[],

    };
    return <GlobalContext.Provider  value={globalData}>{children}</GlobalContext.Provider>;
}
export const useGlobalContext = () => useContext (GlobalContext)