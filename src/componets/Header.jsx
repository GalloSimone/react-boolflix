import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";


export default function Header(){
    const { searchMovie,searchSeries }=useGlobalContext();
    const [userTerm,setUserTerm] = useState('');

    const handleSearchSubmit=(e)=>{
        e.preventDefault();
        searchMovie(userTerm);
        searchSeries(userTerm);
        }
       
        const handleUserTermChange = (e)=>{
          setUserTerm(e.target.value);
        };
    return(
        <header className="bg-black">
          <h1 className="text-danger">BOOFLIX</h1>
    <form onSubmit={handleSearchSubmit}>
    <label></label>
    <input  value={userTerm} onChange={handleUserTermChange}  type="text" className="m-3 rounded-3"/>
    <button className="rounded-3 bg-danger">cerca</button>
    </form>
  </header>
    )
}