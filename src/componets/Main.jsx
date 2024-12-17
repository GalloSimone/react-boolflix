import { useGlobalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";
export default function Main(){
    const {movies, series} = useGlobalContext();
return(
    <main>
   
    <ProductionList productions={movies}>
    <h1>movies list</h1>
    </ProductionList>
    <hr />
       <ProductionList productions={series}>
       <h1>Series TV</h1>
       </ProductionList>
  </main>
)
}