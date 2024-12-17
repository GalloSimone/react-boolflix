import { useState } from "react"
import { useGlobalContext } from "./contexts/GlobalContext"


function App(){
  const { movies, searchMovie}=useGlobalContext();
  const [userTerm,setUserTerm] = useState('')
const handleUserTermChange = (e)=>{
  setUserTerm(e.target.value);
};
const handleSearchSubmit=(e)=>{
e.preventDefault();

searchMovie(userTerm);
}
return (
  <>
  <header>
    <form onSubmit={handleSearchSubmit}>
    <label></label>
    <input  value={userTerm} onChange={handleUserTermChange}  type="text" />
    <button>cerca</button>
    </form>
  </header>

  <main>
    <h1>movies list</h1>
    {movies.map(movie=>(
      <ul>
        <li>{movie.title}</li>
        <li>{movie.original_title}</li>
        <li>{movie.original_language}</li>
        <li>{movie.vote_averange}</li>
      </ul>
    ))}
  </main>
  
    </>
  )
}

  


export default App
