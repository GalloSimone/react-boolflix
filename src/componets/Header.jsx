import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";


export default function Header(){
    const { searchMovie }=useGlobalContext();
    const [userTerm,setUserTerm] = useState('');

    const handleSearchSubmit=(e)=>{
        e.preventDefault();
        searchMovie(userTerm);
        }
       
        const handleUserTermChange = (e)=>{
          setUserTerm(e.target.value);
        };
    return(
        <header>
    <form onSubmit={handleSearchSubmit}>
    <label></label>
    <input  value={userTerm} onChange={handleUserTermChange}  type="text" />
    <button>cerca</button>
    </form>
  </header>
    )
}