import { useGlobalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";
export default function Main(){
    const {movies, series} = useGlobalContext();
return(
    <main className="bg-black">
   
    <ProductionList productions={movies}>
    <h1 className="text-white text-center">movies list</h1>
    </ProductionList>
    <hr />
       <ProductionList productions={series}>
       <h1 className="text-white text-center">Series TV</h1>
       </ProductionList>
  </main>
)
}