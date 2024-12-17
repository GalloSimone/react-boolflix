import { useGlobalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";
export default function Main(){
    const {movies, searchMovies} = useGlobalContext();
return(
    <main>
    <ProductionList productions={movies}>
    <h1>movies list</h1>
    
    </ProductionList>
  </main>
)
}