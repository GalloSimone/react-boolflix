import { useState } from "react"
import { useGlobalContext } from "./contexts/GlobalContext"
import Header from "./componets/Header"
import Main from "./componets/Main.jsx"



function App(){
  const {movies, searchMovies} = useGlobalContext();
 

return (
  <>
  <Header/>

  <Main/>
    </>
  )
}

  


export default App
