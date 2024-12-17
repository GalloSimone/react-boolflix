import { createContext, useContext,useState } from "react";
const GlobalContext=createContext();

export const GlobalContextProvider=({ children })=>{
     const apiUrl='https://api.themoviedb.org/3'
     const headers={
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlmNmYyNTAzMDFjYWZkNmUyMWEzNzAzMzdhMTFiNSIsIm5iZiI6MTczNDM0NzA4Ny4wNzMsInN1YiI6IjY3NjAwOTRmNWJkNjZhNWU1ODEzMTA4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aNoafuCLUcPPobXGh_etqtTY54syTOZGuFOgRDr8SSg"
          
     }
   
      const fetchMovies = (term)=>{
        const fetchConfig={
            method:'GET',
            headers,
        };
    fetch(`${apiUrl}/search/movie?query=${term}`, fetchConfig)
    .then(res=>res.json())
    .then(data=>{
    setGlobalData((globalData)=>({...globalData,movies: data.results}));
        
    })
    
   }




   const fetchSeries = (term)=>{
    const fetchConfig={
        method:'GET',
        headers,
    };
fetch(`${apiUrl}/search/tv?query=${term}`, fetchConfig)
.then((res)=>res.json())
.then((data)=>{
  const normalizedData = data.results.map((serie)=>{
    const{id, name, original_name, original_language, vote_average,poster_path}=serie;
    return{
        id,
       title:name,
       original_title:original_name,
       original_language,
       vote_average,
       poster_path
       
    }
  }

  )
    
  
    setGlobalData((globalData)=>({...globalData,series:normalizedData}));
    
})

}
   
    const [globalData, setGlobalData]=useState({
      
        movies:[],
        searchMovie: fetchMovies,
        series:[],
        searchSeries: fetchSeries

    });
    return <GlobalContext.Provider  value={globalData}>{children}</GlobalContext.Provider>;
}
export const useGlobalContext = () => useContext (GlobalContext)