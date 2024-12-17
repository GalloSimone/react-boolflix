import { useState } from "react"
import { useGlobalContext } from "./contexts/GlobalContext"


function App(){
  const { searchMovie}=useGlobalContext();
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
    <h1>ciao</h1>
    
  </main>
  
    </>
  )
}

  


export default App
